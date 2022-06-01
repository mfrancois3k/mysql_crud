// make a mysql connection crud server with node.js
const app = require('./app');

// //Without downgrading to legacy, https://github.com/sidorares/node-mysql2#readme
// const mysql = require('mysql2');
// const app = express();
// const cors = require('cors');



// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // create connection to our database
// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "Pass@123",
//     database: "crud",
//     port:"3000",
//     multipleStatements: true
// });

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App is listening on port ' + listener.address().port)
  })

