const express = require('express');
const YAML = require('yamljs');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger2.yml');
// Application
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
  console.log('ok');
});
app.listen(4000, () => {
  console.log('Creating swagger ui.');
});
