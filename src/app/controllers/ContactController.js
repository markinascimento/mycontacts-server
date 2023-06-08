const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // -> Ready
  async index (req, res) {
    const contacts = await ContactRepository.findByAll();
    return res.json(contacts);
  }
  // -> Create
  async store (req, res) {
    const { name, email, phone, category } = req.params;
    const emailExists = await ContactRepository.findByEmail(email);

    if (!name) {
      return res.status(404).json({ error: 'Name is required' });
    }

    if(emailExists) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newContact = await ContactRepository.create({ name, email, phone, category });
    return res.json(newContact);
  }

  // -> Edit
  async update (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }

  // -> Delete
  async delete (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }

}

module.exports = new ContactController();
