const app = require('./src/app');
const port = 8000;

app.listen(8000, () => {
	console.log(`Server started, listening on port 8000`);
	console.log(`Press control-C to stop the server`);
});
