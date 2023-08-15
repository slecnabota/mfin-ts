type FormValues = Record<string, string>;

const min = (values: FormValues, name: string, param: string): boolean => {
    const value = values[name];
    if (value.length > 0 && value.length <= parseInt(param)) {
        return false;
    } else {
        return true;
    }
};

const max = (values: FormValues, name: string, param: any): boolean => {
    const value = values[name];
    if (value.length >= parseInt(param)) {
        return false;
    } else {
        return true;
    }
};

const email = (values: FormValues, name: string, param: any): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp(values, name, emailPattern);
};

const regexp = (values: FormValues, name: string, param: RegExp): boolean => {
    const value = values[name];
    return param.test(value);
};

const required = (values: FormValues, name: string, param: any): boolean => {
    const value = values[name];
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
};

const maskFilled = (values: string, name: string, param: any): boolean => {
    const value = values;
    const mask = param;

    const maskedValue = mask.replace(/#/g, '_');
    const sanitizedValue = value.replace(/_/g, '');
    if (sanitizedValue.length !== maskedValue.length) {
        return false;
    } else {
        return true;
    }
};

export {
    min,
    max,
    required,
    email,
    regexp,
    maskFilled
};
