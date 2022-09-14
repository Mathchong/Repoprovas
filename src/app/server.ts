import "./config"
import app from "./app"


const PORT: Number = Number(process.env.PORT) || 5005
PORT
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});