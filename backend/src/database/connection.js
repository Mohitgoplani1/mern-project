import 'dotenv/config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';



mongoose.connect(process.env.MONGO).then(() => {
    console.log('Mongoose connect success.');

    mongoose.connection.once('connected', () => {
        console.log('Database Connected');
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close(true);
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0);    
    });
}).catch((err) => {
    console.error('Mongoose connect failed.', err); // Log the error
});
