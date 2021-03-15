const db = require("../models/index");

// Routes
// =============================================================
module.exports = function (app, jwt) {
  let userAccess = false;

  // =============== get login data from mongodb ===============
  // check login:
  app.post("/api/login", (req, res) => {
    let loginObj = req.body;
    console.log("req:", loginObj);

    db.User.find()
      .then(dbModel => {
        for (const user of dbModel) {
          if (
            loginObj.username === user.username &&
            loginObj.password === user.password
          ) {
            userAccess = true;
            let payload = { subject: user.username };
            let token = jwt.sign(payload, "secretKey");
            console.log("==> login response:", { user, token, success: true });
            res.status(200).send({ user, token, success: true });
          }
          else {
            userAccess = false;
            // console.log("not matched:", loginObj.username, user.username);
          }
        }
        if (!userAccess) {
          res.status(401).json({ "err": "Invalid Username or Password" });
        }
      })
      .catch(err => res.status(422).json(err));
  });

  // =============== create register data from mongodb ===============
  // === use post, if get will be error???? ===
  app.post("/api/register", (req, res) => {
    db.User.find({ username: req.body.username })
      // .sort({ date: -1 })
      .then(dbModel => {
        if (dbModel.length === 0) {
          db.User.create(req.body)
            .then(user => {
              console.log("==>true:", user)
              res.status(200).send({ newUser: true });
            })
        } else {
          res.status(200).send({ newUser: false });
        }
      })
      .catch(err => res.status(422).json(err));
  });

  // =============== get all users data from mongodb - for ranking - ===============
  // === use post, if get will be error???? ===
  app.post("/api/users", (req, res) => {
    db.User.find().sort([['rewards.rainbow', -1], ['rewards.star', -1]])
      .then(dbModel => {
        res.json(dbModel); console.log("==> GET data: ", dbModel, "\n")
      })
      .catch(err => res.status(422).json(err));
  });

  // =============== get login data from mongodb ===============
  // === use post, if get will be error???? ===
  // app.post("/api/profile", (req, res) => {
  //   // db.User.find({ username: req.params.username })
  //   db.User.find({ username: "Mu_Yan" })
  //     // .sort({ date: -1 })
  //     .then(dbModel => { res.json(dbModel); console.log("==> find data: ", dbModel, "\n") })
  //     .catch(err => res.status(422).json(err));
  // });

  // =============== update rewards data from mongodb ===============
  app.put("/api/profile/rewards", (req, res) => {
    // console.log("user:", req.body);
    db.User.findOneAndUpdate(
      { username: req.body.username },
      {
        "rewards.star": req.body.rewards.star,
        "rewards.rainbow": req.body.rewards.rainbow,
        "rewards.stars": req.body.rewards.stars,
        "rewards.rainbows": req.body.rewards.rainbows
      }
    )
      // .then((dbModel) => {
      //   // console.log("\n pack status changed: ", req.params.userId, req.params.packId, "\n");
      //   return db.User.findOneAndUpdate({ _id: req.params.userId }, { $push: { carrier: req.params.packId } }, { new: true });
      // })
      .then(dbModel => {
        let jsonFile = [];
        jsonFile.push(dbModel);
        res.json(jsonFile);

        console.log("==> update rewards: ", jsonFile, "\n")
      })
      // .then(user => {
      //   res.redirect('/profile');
      // })
      .catch(err => res.status(422).json(err));
  });
};
