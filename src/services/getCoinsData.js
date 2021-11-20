import request from 'superagent';

const API_HOST = process.env.API_HOST;

const getCoinsData = () => {
    const getCoinsReq = request.get(`${API_HOST}/coinsData`);
    return getCoinsReq.end((err, res) => {
        console.log(err, res)
    });
};

export default getCoinsData;
