const { Router } = require('express');
const { usersController } = require('./../controllers/users.controller');

const usersRouter = Router();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', usersController.getOne);
usersRouter.patch('/:id', usersController.update);
usersRouter.delete('/:id', usersController.remove);

exports.usersRouter = usersRouter;
