const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(8000, () => {
	console.log(`Server started, listening on port 8000`);
	console.log(`Press control-C to stop the server`);
});
