const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await service.read(reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found` });
}

// //middleware to check for content
// function hasContent(req, res, next) {
//   console.log(req.body.data);
//   const { data: { content } = {} } = req.body;
//   console.log(content);
//   if (content) {
//     res.locals.content = content;
//     return next();
//   } else {
//     next({ status: 400, message: `Must include content` });
//   }
// }

async function update(req, res) {
  const updatedReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
  const data = await service.update(updatedReview);
  res.json({ data });
}

// async function update(req, res) {
//   const updatedReview = {
//     ...req.body.data,
//     review_id: res.locals.review.review_id,
//   };
//   const data = await service.update(updatedReview);
//   res.json({ data });
// }

async function destroy(req, res) {
  const { review } = res.locals;
  await service.delete(review.review_id);
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
