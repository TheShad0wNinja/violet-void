function getPaginationConstraints(req, defaultLimit) {
  const limit = Number(req.query.limit || defaultLimit);
  const offset = Number(req.query.page - 1 || 0) * limit;

  return {limit, offset}
}

module.exports = {getPaginationConstraints}