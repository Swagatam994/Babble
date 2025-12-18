const mongoose = require('mongoose');

/**
 * Connect to MongoDB and return the mongoose connection.
 * This function does not call process.exit; callers should decide how to handle failures.
 */
async function connectDB() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is not set');
        }
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // Recommended options are already defaults in Mongoose 6+, but you can add custom ones here
            // e.g., useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('Connected to MongoDB:', conn.connection.host);
        return conn;
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }
}

module.exports = { connectDB };