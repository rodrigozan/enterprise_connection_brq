import app from "./config/express.js"
import dotenv from 'dotenv'

const port = process.env.PORT || 3000  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});