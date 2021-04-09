// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {
	userController,
} from './controller';

// Init Express app
const app = express();

// Dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
const connectionString = 'mongodb+srv://cropAdmin:theCropMarket@cluster0.gjru1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Controllers here
app.use('/', userController);
//app.use('/abc', abcController);
//app.use('/xyz', xyzController);

// Start here
app.listen(8080, () => {
	console.log('App listening on port 8080!');
	mongoose.connect(connectionString).then(() => {
		console.log('Connected to mongoDB');
	});
});
