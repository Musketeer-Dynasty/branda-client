export const extractMessage = (errorStr: string) => {
  // split string using : as separator, split again using ' as separator, then pick the middle element
  const errorArray = errorStr.split(":");
  let newArray = errorArray[2].split("'");
  if(newArray[1] === undefined){
      return errorStr
  }else{
    return newArray[1]
  }
};
