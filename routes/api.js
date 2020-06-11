const router = require('express').Router();

//API para clients
const apiClientsRouter = require('./api/clients');
router.use('/clients', apiClientsRouter);

//API para users
const apiUsersRouter = require('./api/users');
router.use('/users', apiUsersRouter);

//API para teachers
const apiTeachersRouter = require('./api/teachers');
router.use('/teachers', apiTeachersRouter);

module.exports = router;
