import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const mongoose = __require("mongoose");
export default async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected successfully.');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
}
;
//# sourceMappingURL=database.js.map