const request = require('supertest');
const app = require('../src/app');

describe('Given we access our home route', () => {
	it('will return 200', async () => {
		const response = await request(app).get('/');

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('data');
		expect(response.body.data).toBe('Hello World!');
	});
});
