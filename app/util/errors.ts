export const getErrorMessage = (response: any) => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      //   return response.message.join(", ");
      return formatErrorMessage(response.message[0]);
    }
    return formatErrorMessage(response.message);
  }
  return "Unknown error occurred";
};

export const formatErrorMessage = (message: any) => {
  return message.charAt(0).toUpperCase() + message.slice(1);
};
