
import mongoose from 'mongoose'
import { MONGO_URI } from '../../config';

export default async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error Connecting to Database');
    }

}