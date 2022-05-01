import express from 'express'
import consign from 'consign'
import config from 'config'
import mongoose from 'mongoose'
import db from "../database/config.js"
import routes from "../api/routes/index.js"

// class App {
//     constructor() {
//         this.express = express();

//         this.database();
//         this.middlewares();
//         this.routes();

//         this.express.set('port', process.env.PORT || config.get('server.port'));

//         this.express.use(express.json());

//         database() {
//             mongoose.connect(db.uri, { useNewUrlParser: true });
//         }

//         middlewares() {
//             this.express.use(express.json()); 
//         }

//         routes() {
//             this.express.use(require("../api/routes"));
//         }
//     }
// }

// module.exports = new App().express;

const app = express()

app.set('port', process.env.PORT || config.get('server.port'));

// MIDDLEWARES
app.use(express.json());

mongoose.connect(db.uri, { useNewUrlParser: true });

routes(app)


export default app
