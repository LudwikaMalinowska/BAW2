const express = require("express")
const app = express.Router()
var {NodeAdapter} = require("ef-keycloak-connect");
const config = require(`${Path_To_Config_File}`);
const keycloak = new NodeAdapter(config)

app.get("/", async (req, res) => {
    return "Hello world";
})

module.exports = app