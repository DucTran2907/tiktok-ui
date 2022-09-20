import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async function (path, options = {}) {
    const responsive = await request.get(path, options);
    return responsive.data;
};

export default request;
