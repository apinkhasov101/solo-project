import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // need to use mongoose package to connect to our database
    const conn = await mongoose.connect(process.env.MONGO_URI,
    //  { useNewUrlParser: true, // updated MongoDB parser that connects strings and handle special characters in credentials
      // useUnifiedTopology: true // Improved reliability regarding server discovery via MongoDB}
    );
    console.log(`MongoDB Connected': ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 means exist with failure, 0 means success
  }
};
export default connectDB; // Allows connectDB function to be imported and used another files, works b/c I export only 1 func in the db.js file
