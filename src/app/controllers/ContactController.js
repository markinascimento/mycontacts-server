class ContactController {
  // -> Ready
  index (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }
  // -> Create
  store (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }

  // -> Edit
  update (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }

  // -> Delete
  delete (req, res) {
    return res.json({ ok: 'rotando pegando com sucesso' });
  }

}

module.exports = new ContactController();
