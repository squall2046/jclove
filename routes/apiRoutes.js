// Routes
// =============================================================
module.exports = function (app) {

  let joanna = {
    "userId": 150001,
    "firstName": "Joanna",
    "lastName": "Wu",
    "userName": "Mu_Yan",
    "email": "joanna.wu@gmail.com",
    "userImage": "./../../../assets/images/logo/joanna.jpg",
    "rewards": {
      "star": 3,
      "rainbow": 1,
      "stars": [
        1,
        2,
        3
      ],
      "rainbows": [
        1
      ]
    }
  }

  // =============== get all news data from mongodb ===============
  app.get("/api/profile/get/rewards", (req, res) => {
    console.log("get profile request");
    res.json(joanna)
  });

  app.put("/api/profile/put/rewards", (req, res) => {
    console.log("user:", req.body);

    // profile.rewards.stars = req.body.rewards.stars;
    // profile.rewards.rainbows = req.body.rewards.rainbows;

    res.json(joanna);

    // res.json(
    //   {
    //     star: 3,
    //     rainbow: 1,
    //     stars: [1, 2, 3],
    //     rainbows: [1],
    //   }
    // );
  });
};
