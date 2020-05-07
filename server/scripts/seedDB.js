const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/jcloveDB"
mongoose.connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log(" ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });


const userSeed = [
  {
    userName: 'Mu_Yan',
    firstName: 'Joanna',
    lastName: 'Wu',
    email: 'joanna.wu@gmail.com',
    userImage: '../../../assets/images/logo/joanna.jpg',
    rewards: {
      star: 0,
      rainbow: 5,
      stars: [],
      rainbows: [1, 2, 3, 4, 5],
    }
  },
  {
    userName: 'Mu_Zhi',
    firstName: 'Chloe',
    lastName: 'Wu',
    email: 'chloe.wu@gmail.com',
    userImage: '../../../assets/images/logo/chloe.jpg',
    rewards: {
      star: 0,
      rainbow: 5,
      stars: [],
      rainbows: [1, 2, 3, 4, 5],
    }
  },
  {
    userName: 'test1',
    rewards: {
      star: 3,
      rainbow: 4,
      stars: [],
      rainbows: [],
    }
  },
  {
    userName: 'test2',
    rewards: {
      star: 2,
      rainbow: 5,
      stars: [],
      rainbows: [],
    }
  },
  {
    userName: 'test3',
    rewards: {
      star: 1,
      rainbow: 5,
      stars: [],
      rainbows: [],
    }
  },
  {
    userName: 'test4',
    rewards: {
      star: 4,
      rainbow: 4,
      stars: [],
      rainbows: [],
    }
  },
];

db.User
  // .remove({})
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });


// 1. in the package.json, add
// "scripts": {
// "seed": "node scripts/seedDB.js",
// },

// 2. ng build --aot --prod
// run the following command at the project root: `npm run seed`
// again, then restart node server;
// (be sure to start `mongod`.)