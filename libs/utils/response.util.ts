export const successResponse = (message: string, data?: any) => {
  return {
    status: 'success',
    message,
    data: data ?? null,
  };
};

export const errorResponse = (
  message: string,
  statusCode = 400,
  error?: any,
) => {
  return {
    status: 'error',
    message,
    code: statusCode,
    error: error ?? null,
  };
};
