// Routes
// =============================================================
module.exports = function (app) {

  profile = {
    userId: 150001,
    firstName: 'Joanna',
    lastName: 'Wu',
    userName: 'Mu Yan',
    email: 'joanna.wu@gmail.com',
    userImage: './../../../assets/images/logo/joanna.jpg',
    rewards: {
      star: 0,
      rainbow: 0,
      stars: [],
      rainbows: [],
    }
  };

  // =============== get all news data from mongodb ===============
  app.get("/api", (req, res) => {
    res.json(profile);
  });

  app.post("/api/profile/rewards", (req, res) => {
    console.log("user:", req.body);

    // profile.rewards.stars = user.rewards.stars;
    // profile.rewards.rainbows = user.rewards.rainbows;

    // res.json(profile.rewards);
  });
};
