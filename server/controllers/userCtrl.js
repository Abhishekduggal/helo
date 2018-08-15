const create = (req, res, next) => {
  let { username, password } = req.body;

  //   console.log(username, password);
  const db = req.app.get("db");

  db.add_user([username, password])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const get_User = (req, res, next) => {
  let { username, password } = req.body;

  //   console.log(req.body);
  const db = req.app.get("db");

  db.get_user([username, password])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = {
  create,
  get_User
};
