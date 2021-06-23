const service = require("./tables.service");
const asyncBoundary = require("../errors/asyncBoundary");
const {read: readReservation} = require("../reservations/reservations.service");




async function tableExists(req, res, next){
  const {table_id} = req.params;
  const table = await service.read(table_id);
  if(!table){
    next({
      status: 404,
      message: `Table ${table_id} does not exist`
    })
  }
  res.locals.table = table;
  next();
}


async function reservationExists(req, res, next) {
  const {reservation_id} = req.body.data;
  const reservation = await readReservation(reservation_id);
  if(reservation) {
    res.locals.reservation = reservation;
    return next();
  }
  return next({
    status:404,
    message: `reservation_id ${reservation_id} not found.`
  })
}


function validCapacity(req, res, next) {
  const {people} = res.locals.reservation;
  const {capacity} = res.locals.table;

  if(capacity < people) {
    return next({
      status: 400,
      message: "Party size exceeds table capacity"
    })
  }
  next();
}

function read(req, res){
  res.json({data: res.locals.table});
}

function occupiedTable(req, res, next) {
  const {reservation_id} = res.locals.table;
  if(reservation_id) {
    return next({
      status: 400, 
      message: "Table is already occupied."
    })
  }
  return next()
}



async function list(req, res) {
  const result = await service.list();
  const sortedResult = result.sort((a, b) => a.table_name > b.table_name ? 1 : -1);
  res.json({ data: sortedResult});
}


async function update(req, res) {
  const {table_id} = req.params;
  const {reservation_id} = req.body.data;

  const updatedTable = {
    reservation_id: reservation_id,
    table_id: table_id,
  }
  const data = await service.update(updatedTable)
  res.json({data})
}

async function create(req, res) {
  const newTable = await service.create(req.body.data);
  res.status(201).json({data: newTable});
}

module.exports = {
    create: [asyncBoundary(create)],
    list: [asyncBoundary(list)],
    update: [
    asyncBoundary(tableExists), 
    asyncBoundary(reservationExists), 
    occupiedTable,
    validCapacity, 
    asyncBoundary(update)
    ],
}
