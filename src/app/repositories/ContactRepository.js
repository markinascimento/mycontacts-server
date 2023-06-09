/* eslint-disable no-const-assign */
const { v4 } = require('uuid');

let mock = [
  {
    id: v4(),
    name: 'Marcos Vinicius',
    email: 'marcos@gmail.com',
    phone: '839989292330',
    category_id: 'facebook',
  },

  {
    id: v4(),
    name: 'Luiz Augusto',
    email: 'luiz@gmail.com',
    phone: '1232432634',
    category_id: 'instagram',
  },

  {
    id: v4(),
    name: 'Felipe José',
    email: 'felipe@gmail.com',
    phone: '9028402984932',
    category_id: 'linkedin',
  },

  {
    id: v4(),
    name: 'Renato Abrue',
    email: 'renato@gmail.com',
    phone: '34209429084',
    category_id: 'whatsapp',
  }
];

class ContactRepository {
  findByAll() {
    return new Promise((resolve) => resolve(mock));
  }

  findByID(id) {
    return new Promise((resolve) => resolve(
      mock.find((contact) => contact.id === id)
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      mock.find((contact) => contact.email === email)
    ));
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      };

      mock.push(newContact);
      resolve(newContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      mock = mock.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id
      };

      mock = mock.map((contact) => (
        contact.id === id ? updateContact : contact
      ));

      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();


