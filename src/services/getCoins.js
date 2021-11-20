import request from 'superagent';
const API_HOST = process.env.API_HOST;
const getCoins = () => new Promise((resolve, reject) => {
    const getCoinsReq = request.get(`${API_HOST}/coins`);
    getCoinsReq.end((err, response) => {
        if (err) return reject(err);
        const coinsData = response.body.coinsData;
        resolve(coinsData);
    });
})

export default getCoins;
