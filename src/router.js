const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const route = Router();

route.get('/contacts', ContactController.index);
route.get('/contacts/:id', ContactController.show);
route.post('/contacts', ContactController.store);
route.put('/contacts/:id', ContactController.update);
route.delete('/contacts/:id', ContactController.delete);

module.exports = route;
