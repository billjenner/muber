const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there' });
    },

    create(req, res, next) {
        // console.log(req.body);
        // res.send({ hi: 'there' });
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver => res.send(driver))
            .catch(next);
    },

    edit (req, res, next) {
        const driverId = req.parmans.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
            .then(() => Driver.findById({ _id: id }))
            .then(driver => res.send(driver))
            .catch(next);
    }
};