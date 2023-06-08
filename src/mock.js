const { v4 } = require('uuid');

// eslint-disable-next-line no-unused-vars
let mock = [
  {
    id: v4(),
    name: 'Marcos Vinicius',
    email: 'marcos@gmail.com',
    phone: '839989292330',
    category: 'facebook',
  },

  {
    id: v4(),
    name: 'Luiz Augusto',
    email: 'luiz@gmail.com',
    phone: '1232432634',
    category: 'instagram',
  },

  {
    id: v4(),
    name: 'Felipe José',
    email: 'felipe@gmail.com',
    phone: '9028402984932',
    category: 'linkedin',
  },

  {
    id: v4(),
    name: 'Renato Abrue',
    email: 'renato@gmail.com',
    phone: '34209429084',
    category: 'whatsapp',
  }
];


module.exports = mock;
