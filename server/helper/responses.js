const responses = {
  success: (statusCode, message, data) => {
    const successMessage = {
      success: true,
      statusCode,
      message,
      data,
    };
    return successMessage;
  },

  error: (statusCode, message) => {
    const errorMessage = {
      error: true,
      statusCode,
      message,
    };
    return errorMessage;
  },

  output: (statusCode, message, data, meta) => {
    const outputMessage = {
      error: false,
      statusCode,
      message,
      data,
      meta,
    };
    return outputMessage;
  },
};

export default responses;
