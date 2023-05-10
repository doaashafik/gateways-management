export const requestHandler = (request) => {
    return request;
};

export const successHandler = (response) => {
    return response;
};

export const errorHandler = (error) => {
    return Promise.reject({ ...error });
};
