const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoryRepository.findAll();
    return res.json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findByName(name);
    if(categoryExists) {
      return res.status(404).json({ error: 'This name has already been created' });
    }

    const newCategory = await CategoryRepository.create({ name });
    return res.json(newCategory);
  }
}

module.exports = new CategoryController();
