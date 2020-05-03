// Routes
// =============================================================
module.exports = function (app) {

  let profile = [{
    "userId": 150001,
    "firstName": "Joanna",
    "lastName": "Wu",
    "userName": "Mu_Yan",
    "email": "joanna.wu@gmail.com",
    "userImage": "./../../../assets/images/logo/joanna.jpg",
    "rewards": {
      "star": 0,
      "rainbow": 0,
      "stars": [],
      "rainbows": []
    }
  }]

  // =============== get all news data from mongodb ===============
  // === post to get will be error???? ===
  app.post("/api/profile/get/rewards", (req, res) => {
    console.log("profile rewards request from client (should GET not POST, but GET doesn't work???)");
    res.json(profile)
  });

  app.put("/api/profile/put/rewards", (req, res) => {
    console.log("user:", req.body);

    profile[0].rewards.star = req.body.rewards.star;
    profile[0].rewards.rainbow = req.body.rewards.rainbow;
    profile[0].rewards.stars = req.body.rewards.stars;
    profile[0].rewards.rainbows = req.body.rewards.rainbows;

    res.json(profile);
  });
};
