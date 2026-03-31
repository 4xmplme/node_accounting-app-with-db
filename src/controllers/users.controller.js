const { usersService } = require('../services/users.service');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  const user = await usersService.create(name);

  res.status(201).json(usersService.normalize(user));
};

const getAll = async (req, res) => {
  const users = await usersService.getAll();

  res.send(users.map((user) => usersService.normalize(user)));
};

const getOne = async (req, res) => {
  const user = await usersService.getOne(Number(req.params.id));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(usersService.normalize(user));
};

const update = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getOne(Number(id));

  if (!user) {
    return res.sendStatus(404);
  }

  const updatedUser = await usersService.update({
    id: Number(id),
    name: req.body.name,
  });

  res.json(usersService.normalize(updatedUser));
};

const remove = async (req, res) => {
  const user = await usersService.remove(Number(req.params.id));

  if (!user) {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
};

const usersController = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

exports.usersController = usersController;
