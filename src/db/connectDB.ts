import mongoose from 'mongoose';

const MONGODB_URL: string = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
    throw new Error('MONGODB_URL environment variable is not defined');
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache;
}

let cached: MongooseCache = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = (async () => {
            try {
                const mongooseConnection = await mongoose.connect(MONGODB_URL, {});
                return mongooseConnection;
            } catch (error) {
                cached.promise = null;
                throw error;
            }
        })();
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
