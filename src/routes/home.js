const routes = require('express').Router();

routes.get('/', (req, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

module.exports = routes;
