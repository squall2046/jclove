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
    "username": "Mu_Yan",
    "password": "muyan",
    "firstName": "Joanna",
    "lastName": "Wu",
    "email": "joanna.wu@gmail.com",
    "userImage": "../../../assets/images/logo/joanna.jpg",
    "rewards": {
      "star": 4,
      "rainbow": 8,
      "stars": [
        1,
        2,
        3,
        4
      ],
      "rainbows": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ]
    }
  },
  {
    "username": "Mu_Zhi",
    "password": "muzhi",
    "firstName": "Chloe",
    "lastName": "Wu",
    "email": "chloe.wu@gmail.com",
    "userImage": "../../../assets/images/logo/chloe.jpg",
    "rewards": {
      "star": 3,
      "rainbow": 8,
      "stars": [
        1,
        2,
        3
      ],
      "rainbows": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ]
    }
  },
  {
    "username": "test1",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 3,
      "rainbow": 4,
      "stars": [
        1,
        2,
        3
      ],
      "rainbows": []
    }
  },
  {
    "username": "test2",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 2,
      "rainbow": 5,
      "stars": [
        1,
        2
      ],
      "rainbows": []
    }
  },
  {
    "username": "test3",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 1,
      "rainbow": 5,
      "stars": [
        1
      ],
      "rainbows": []
    }
  },
  {
    "username": "test4",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 4,
      "rainbow": 10,
      "stars": [
        1,
        2,
        3,
        4
      ],
      "rainbows": []
    }
  },
  {
    "username": "test5",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 0,
      "rainbow": 20,
      "stars": [],
      "rainbows": []
    }
  },
  {
    "username": "test6",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 0,
      "rainbow": 30,
      "stars": [],
      "rainbows": []
    }
  },
  {
    "username": "test7",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 0,
      "rainbow": 50,
      "stars": [],
      "rainbows": []
    }
  },
  {
    "username": "test8",
    "userImage": "../../../assets/images/logo/placeholder1.png",
    "rewards": {
      "star": 0,
      "rainbow": 99,
      "stars": [],
      "rainbows": []
    }
  }
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