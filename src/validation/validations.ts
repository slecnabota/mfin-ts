// const min = (values, name, param) => {
//   const value = values[name]
//   if (value.length > 0 && value.length <= param) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const max = (values, name, param) => {
//   const value = values[name]
//   if (value.length >= param) {
//     return false;
//   } else {
//     return true;
//   }
// };
// const email = (values, name, param) => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regexp(values, name, emailPattern)
// }

// const regexp = (values, name, param) => {
//   const value = values[name]
//   const patternRegex = new RegExp(param);
//   return patternRegex.test(value)
// }

// const required = (values, name, param) => {
//   const value = values[name]
//   if (value.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const maskFilled = (values, name, param) => {
//   const value = values;
//   const mask = param;

//   const maskedValue = mask.replace(/#/g, '_');
//   const sanitizedValue = value.replace(/_/g, '');
//   if (sanitizedValue.length !== maskedValue.length) {
//     return false;
//   } else {
//     return true;
//   }
// };
// export {
//   min, max, required, email, regexp, maskFilled
// };
const min = (values: any, name: string, param: string): boolean => {
  const value = values[name];
  if (value.length > 0 && value.length <= parseInt(param)) {
    return false;
  } else {
    return true;
  }
};

const max = (values: any, name: string, param: string): boolean => {
  const value = values[name];
  if (value.length >= parseInt(param)) {
    return false;
  } else {
    return true;
  }
};

const email = (values: any, name: string, param: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexp(values, name, emailPattern);
};

const regexp = (values: any, name: string, param: RegExp): boolean => {
  const value = values[name];
  return param.test(value);
};

const required = (values: any, name: string, param: string): boolean => {
  const value = values[name];
  return value.length > 0;
};

const maskFilled = (values: string, name: string, param: string): boolean => {
  const value = values;
  const mask = param;

  const maskedValue = mask.replace(/#/g, '_');
  const sanitizedValue = value.replace(/_/g, '');
  return sanitizedValue.length === maskedValue.length;
};

export {
  min,
  max,
  required,
  email,
  regexp,
  maskFilled
};
