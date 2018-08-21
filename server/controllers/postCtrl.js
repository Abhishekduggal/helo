const read_Posts_User = (req, res, next) => {
  let { id } = req.params;
  let { search, myposts } = req.body;

  //   console.log(id, search, myposts);
  const db = req.app.get("db");

  if (myposts) {
    db.get_all_posts_user([id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => res.status(500).send(err));
  } else {
    db.get_all_posts_nouser([id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => res.status(500).send(err));
  }
};

const read_Posts = (req, res, next) => {
  const db = req.app.get("db");

  db.get_all_posts()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const create_Posts = (req, res, next) => {
  //   console.log(req.body);
  let { id } = req.params;
  //This is the User or Auth ID
  let { title, imageURL, content } = req.body;

  //   console.log(id, title, imageURL, content);
  const db = req.app.get("db");

  db.create_post([title, imageURL, content, id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const update = (req, res, next) => {
  let { title } = req.params;

  let { content } = req.body;

  console.log(title, content);
  const db = req.app.get("db");

  db.update_post([title, content])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  read_Posts_User,
  read_Posts,
  create_Posts,
  update
};
