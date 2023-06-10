const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // -> Ready
  async index (req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactRepository.findAll(orderBy);
    return res.json(contacts);
  }

  // -> List by ID
  async show (req, res) {
    const { id } = req.params;
    const contact = await ContactRepository.findByID(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(contact);
  }

  // -> Create
  async store (req, res) {
    const { name, email, phone, category_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);
    if(contactExists) {
      return res.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const newContact = await ContactRepository.create({
      name, email, phone, category_id
    });
    return res.json(newContact);
  }

  // -> Edit
  async update (req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const contactExists = await ContactRepository.findByID(id);
    if(!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    if(!name) {
      return res.status(404).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactRepository.update(id, { name, email, phone, category_id });
    return res.json(contact);
  }

  // -> Delete
  async delete (req, res) {
    const { id } = req.params;
    await ContactRepository.delete(id);
    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
