const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  const category = await categoriesService.create(name);

  res.status(201).json(categoriesService.normalize(category));
};

const getAll = async (req, res) => {
  const categories = await categoriesService.getAll();

  res.send(categories.map((category) => categoriesService.normalize(category)));
};

const getOne = async (req, res) => {
  const category = await categoriesService.getOne(Number(req.params.id));

  if (!category) {
    res.sendStatus(404);

    return;
  }

  res.send(categoriesService.normalize(category));
};

const update = async (req, res) => {
  const { id } = req.params;
  const category = await categoriesService.getOne(Number(id));

  if (!category) {
    return res.sendStatus(404);
  }

  const updatedcategory = await categoriesService.update({
    id: Number(id),
    name: req.body.name,
  });

  res.json(categoriesService.normalize(updatedcategory));
};

const remove = async (req, res) => {
  const category = await categoriesService.remove(Number(req.params.id));

  if (!category) {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
};

const categoriesController = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

exports.categoriesController = categoriesController;
