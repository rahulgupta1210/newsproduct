import * as express from 'express';
import * as productController from './controllers/productController'
//import * as config from './config/config';
import * as mongoose from "mongoose";
import * as http from 'http';


 
const app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
// let expressJwt = require('express-jwt');
//let config = require('./config/config');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const uri: string = "mongodb://127.0.0.1:27017/local";

const PORT = 4000;
const MONGO_URI = 'mongodb://localhost:27017/ng8crud';
const serverMongo = http.createServer(app);
serverMongo.listen(PORT);
serverMongo.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false});
	mongoose.connection.on('open', () => {
		console.info('Connected to Mongo.');
	});
	mongoose.connection.on('error', (err: any) => {
		console.error(err);
	});
});

//use JWT auth to secure the api, the token can be passed in the authorization header or querystring
// app.use(expressJwt({
//     secret: config.secret,
//     getToken: function (req) {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     }
// }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));
 
app.get('/products', productController.createProduct);
app.post('/add', productController.getProducts);
app.post('/edit', productController.edit);
app.post('/delete', productController.deleteProduct);
app.post('/update', productController.update);

// app.get("/books", productController.allBooks);
// app.get("/book/:id", productController.getBook);
// app.post("/book", productController.addBook);
// app.put("/book/:id", productController.updateBook);
// app.delete("/book/:id", productController.deleteBook);

// routes
// app.use('/api/users', require('./controllers/users.controller'));
// app.use('/api/products',require('./controllers/products.controller'));
// app.use('/api/news',require('./controllers/news.controller'));
// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });