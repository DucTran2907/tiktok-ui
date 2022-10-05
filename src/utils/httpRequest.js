import axios from 'axios';

//console.log(process.env);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async function (path, options = {}) {
    const responsive = await httpRequest.get(path, options);
    return responsive.data;
};

export default httpRequest;
