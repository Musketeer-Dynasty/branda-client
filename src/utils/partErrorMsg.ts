export const extractMessage = (errorStr: string) => {
  // Parse the stringified object into a JavaScript object
  const errorObj = JSON.parse(errorStr);

  // Get the first key in the object
  const key = Object.keys(errorObj)[0];
  // Return the 'message' value associated with that key
  return errorObj[key].message;
};
