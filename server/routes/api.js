const db = require("../models/index");

// Routes
// =============================================================
module.exports = function (app, jwt) {
  let userExist = { success: false };

  // check login:
  app.post("/api/login", (req, res) => {
    let loginObj = req.body;
    console.log("req:", loginObj);

    db.User.find().then(dbModel => {
      for (const dbObj of dbModel) {
        if (
          loginObj.username === dbObj.username &&
          loginObj.password === dbObj.password
        ) {
          userExist.success = true;
          let payload = { subject: dbObj.userName };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
      // res.json(userExist);
    })
  });

  // =============== get all users data from mongodb???????? ===============
  // === use post, if get will be error???? ===
  app.post("/api/users", (req, res) => {
    db.User.find().sort([['rewards.rainbow', -1], ['rewards.star', -1]])
      .then(dbModel => {
        res.json(dbModel); console.log("==> GET data: ", dbModel, "\n")
      })
      .catch(err => res.status(422).json(err));
  });

  // =============== get all users data from mongodb???????? ===============
  // === use post, if get will be error???? ===
  app.post("/api/profile", (req, res) => {
    // db.User.find({ userName: req.params.userName })
    db.User.find({ userName: "Mu_Yan" })
      // .sort({ date: -1 })
      .then(dbModel => { res.json(dbModel); console.log("==> find data: ", dbModel, "\n") })
      .catch(err => res.status(422).json(err));
  });

  app.put("/api/profile/rewards", (req, res) => {
    // console.log("user:", req.body);
    db.User.findOneAndUpdate(
      { userName: req.body.userName },
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
