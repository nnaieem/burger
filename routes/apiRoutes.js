const express = require('express');

const db = require('../models');

const router = express.Router();

router.get('/burgers', async (_, res) => {
    const data = await db.Burger.findAll();

    res.json(data);
});

router.put('/burger/:id/devour', async (req, res) =>{
    const { id } = req.params.id;

    res.send(id);

    // await db.Burger.update({
    //     isDevoured: true
    // }, {
    //     id
    // });

    // res.status(200).end();
})

module.exports = router;