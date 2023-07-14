async function successResponse(res, data) {
  res.status(200).json({
    status: 'success',
    data,
  });
}
function errorResponse(res, data) {
  res.status(500).json({
    status: 'error',
    data,
  });
}
module.exports = {
  successResponse,
  errorResponse,
}