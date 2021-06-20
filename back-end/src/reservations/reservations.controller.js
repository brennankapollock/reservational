/**
 * List handler for reservation resources
 */
const service = require("./reservations.service");
const asyncBoundary = require("../errors/asyncBoundary");

const VALID_PROPERTIES = [
  "data",
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "reservation_time",
  "people",
  "reservation_id",
];

function hasOnlyValidProperties(req, res, next) {
  const data = ({} = req.body);
  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  return next();
}


async function reservationExists(req, res, next) {
  const {reservation_id} = req.params;
  const reservation = await service.read(reservation_id);
  if(!reservation) {
    next({ status: 404, message: `reservation id: ${reservation_id} could not be found`});
  }
  res.locals.reservation = reservation;
  next();
}

function tuesdayCheck(req, res, next) {
  const stateDate = req.body.data.reservation_date;
  let inputDate = new Date(stateDate);
  if(inputDate.getUTCDay() === 2) {
    return next({
      status: 400,
      message: "We are closed on Tuesdays"
    })
  }
  return next();
}

function pastCheck(req, res, next) {
  const stateDate = req.body.data.reservation_date;
  let inputDate = new Date(stateDate);
  let today = new Date();
  if(inputDate.getTime() < today.getTime()) {
    return next({
      status: 400,
      message: "Must book on a future day"
    })
  }
  return next();
}

function timeCheck(req, res, next) {
  const stateTime = req.body.data.reservation_time;
  let [hours, minutes, seconds] = stateTime.split(":");
  if(Number(hours) <= 10 && Number(minutes) < 30) {
    next({
      status: 400,
      message: "We open at 10:30am"
    })
  }
  if(Number(hours) > 21 || Number(hours) >= 21 && Number(minutes) > 30) {
    next({
      status: 400,
      message: "We close at 10:30pm. Cannot make a reservation before 9:30am"
    })
  }
  return next();
}


function read(req, res) {
  res.json({data: res.locals.reservation})
}

async function list(req, res, next) {
  const date = req.query.date;
  if (!date) {
    return next();
  }
  const reservations = await service.list(date);
  const sortedReservations = reservations.sort((a, b) =>
    a.reservation_time > b.reservation_time ? 1 : -1
  );
  res.json({ data: sortedReservations });
}

async function create(req, res) {
  const newReservation = await service.create(req.body.data);
  res.status(201).json({data: newReservation});
}

module.exports = {
  list,
  read: [reservationExists, read],
  create: [hasOnlyValidProperties, tuesdayCheck, pastCheck, timeCheck, asyncBoundary(create)],
};
