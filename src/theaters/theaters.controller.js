const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list() {
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
