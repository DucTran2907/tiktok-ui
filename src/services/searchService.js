import * as httpRequest from '~/utils/httpRequest';

export const search = async function (q, type = 'less') {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
