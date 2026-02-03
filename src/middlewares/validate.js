const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.query, {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true,
  });

  if (error) return next(error);
  req.validated = value;
  next();
};

export default validate;

// const validate = (schema) => (req, res, next) => {
//   const { error, value } = schema.validate(req.query, {
//     abortEarly: false,
//     allowUnknown: false,
//     stripUnknown: true,
//   });

//   if (error) return next(error);
//   req.query = value;
//   next();
// };

// export default validate;
