/* eslint-disable no-const-assign */
const { v4 } = require('uuid');
const mock = require('../../mock');

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

  create({ name, email, phone, category }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category
      };

      mock = mock.push(newContact);

      resolve(newContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => resolve(
      mock = mock.filter((contact) => contact.id !== id)
    ));
  }
}

module.exports = new ContactRepository();


