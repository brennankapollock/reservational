/**
 * List handler for reservation resources
 */
const service = require("./reservations.service");
const asyncBoundary = require("../errors/asyncBoundary");


async function list(req, res) {
  const reservations = await service.list();
  res.json({data: reservations})

}

async function create(req, res) {
   //insert service here
   const newReservation = await service.create(req.body.data);
   res.status(201).json({data: newReservation});
}

module.exports = {
  list,
  create: asyncBoundary(create),
};
