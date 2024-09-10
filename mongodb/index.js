// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       dbName: "HaloChat",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;

//     console.log("MongoDB is connected successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "HaloChat",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30-second timeout
      connectTimeoutMS: 10000, // Optional, for quicker connection attempts
    });

    isConnected = true;
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error(error);
  }
};
