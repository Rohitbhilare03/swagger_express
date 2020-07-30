const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "POC with Swagger Node Express API",
            description: "Test API",
            contact: {
                name: "Rohit Bhilare"
            },
            servers: ["http://localhost:8000"]
        }
    },
    // ['.routes/*.js']
    apis: ["routes.js"]
};

const routes = require('./routes');
app.use("/", routes);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(8000, function () {
    console.log('Listening on port 8000');
})