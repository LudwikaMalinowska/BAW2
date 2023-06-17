const express = require("express")
const app = express.Router()

app.get("/", async (req, res) => {
    return {message: "Hello world"};
})

module.exports = app