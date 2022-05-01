import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import db from "../database/config.js"
import routes from "../api/routes/index.js"

const app = express()

app.set('port', process.env.PORT || config.get('server.port'));

// MIDDLEWARES
app.use(express.json());

mongoose.connect(db.uri, { useNewUrlParser: true });

app.use(routes);
W
export default app
