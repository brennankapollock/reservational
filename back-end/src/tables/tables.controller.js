const service = require("./tables.service");
const asyncBoundary = require("../errors/asyncBoundary");



async function list(req, res) {
  const result = await service.list();
  const sortedResult = result.sort((a, b) => a.table_name > b.table_name ? 1 : -1);
  res.json({ data: sortedResult});
}




async function create(req, res) {
  const newTable = await service.create(req.body.data);
  res.status(201).json({data: newTable});
}

module.exports = {
    create: [asyncBoundary(create)],
    list: [asyncBoundary(list)],
}
