const APPLICATION_ERRORS = {
  "FORBIDDEN": {
    message: "FORBIDDEN",
    code: "1000",
  },
};

const USER_ERRORS = {
  "EMAIL_ALREADY_IN_USE": {
    message: "EMAIL_ALREADY_IN_USE",
    code: 2000,
  },
};

const ErrorsMapper = {
  APPLICATION_ERRORS,
  USER_ERRORS,
};

export default ErrorsMapper;
