const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      console.error(error); // 👈 Bahut important
      next(error);
    }
  };
};

export default asyncHandler;