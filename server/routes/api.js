const db = require("../models/index");

// Routes
// =============================================================
module.exports = function (app) {
  // let profile = [{
  //   "userName": "Mu_Yan",
  //   "firstName": "Joanna",
  //   "lastName": "Wu",
  //   "email": "joanna.wu@gmail.com",
  //   "userImage": "./../../../assets/images/logo/joanna.jpg",
  //   "rewards": {
  //     "star": 0,
  //     "rainbow": 1,
  //     "stars": [],
  //     "rainbows": [1]
  //   }
  // }]

  // =============== get all news data from mongodb ===============
  // === post to get will be error???? ===
  app.post("/api/profile/get/rewards", (req, res) => {
    console.log("profile rewards request from client (should GET not POST, but GET doesn't work???)");
    // db.User.find({ userName: req.params.userName })
    db.User.find({ userName: "Mu_Yan" })
      // .sort({ date: -1 })
      .then(dbModel => { res.json(dbModel); console.log("\n\r ==> find data: \r", dbModel, "\n") })
      .catch(err => res.status(422).json(err));
  });

  app.put("/api/profile/put/rewards", (req, res) => {
    // console.log("user:", req.body);
    // profile[0].rewards.star = req.body.rewards.star;
    // profile[0].rewards.rainbow = req.body.rewards.rainbow;
    // profile[0].rewards.stars = req.body.rewards.stars;
    // profile[0].rewards.rainbows = req.body.rewards.rainbows;
    db.User.findOneAndUpdate(
      { userName: "Mu_Yan" },
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

        console.log("\n\r ==> update rewards: \r", jsonFile, "\n")
      })
      // .then(user => {
      //   res.redirect('/profile');
      // })
      .catch(err => res.status(422).json(err));
  });
};
