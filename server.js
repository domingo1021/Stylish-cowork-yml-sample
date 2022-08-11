
const express = require('express')
const YAML = require('yamljs')

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yml')
// Application
const app = express()

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

app.listen(5000, ()=>{
    console.log("Creating swagger ui.");
})