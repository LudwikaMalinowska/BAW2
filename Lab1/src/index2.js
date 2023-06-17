const basicAuth = require("express-basic-auth");
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(basicAuth({
    users: {'admin': 'pearljam'},
    unauthorizedResponse: {"message": "zły login lub hasło"}
}));

const simpleRoute = require("./routes/simpleRoute")
app.use("/", simpleRoute)

const port = process.env.PORT || 5000
		app.listen(port, () => {
			console.log(`API server listening at http://localhost:${port}`)
		})