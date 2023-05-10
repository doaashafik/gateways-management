export const requestHandler = (request) => {
    return request;
};

export const successHandler = (response) => {
    return response;
};

export const errorHandler = (error) => {
    const { response: { status } } = error;
    return Promise.reject({ message: errorMessages[status] })
};

let errorMessages = {
    404: 'No Data Found'
}