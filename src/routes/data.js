const express = require('express');
const axios = require('axios')
const router = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

router.get('/assets/:id', asyncMiddleware(async (req, res) => {
 //res.json(ajax.responseText);
    let id = req.params?.id
    if(!id) {
        return res.status(403).json({ error: "Did not provide asset id", })
    }

    try {
        id = encodeURIComponent(id)
        const response = await axios.get(`https://assetdelivery.roblox.com/v1/asset?id=${id}`)
        return res
            .status(response.status)
            .header(response.headers)
            .send(response.data)
    } catch (ex) {
        return res.status(500).json({ error: 'Error occured while making asset request', message: ex.message })
    }
})
}));


module.exports = router;
