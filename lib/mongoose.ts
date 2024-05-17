import mongoose from 'mongoose';

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI is not defined');
    return;
  }

  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  try {
    // Connect to MongoDB using the provided URI
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true, // This is no longer necessary in Mongoose 6.x, but harmless
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
    } as any); // Typecast options to 'any'

    isConnected = true;
    console.log('MongoDB Connected');
    
    // Optional: Add event listeners to monitor the connection status
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
      isConnected = false;
    });

  } catch (error) {
    // Handle connection errors
    console.error('Error connecting to MongoDB:', error);
  }
};
