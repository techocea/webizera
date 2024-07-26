import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "",{
        dbName:"webizera"
    })
    isConnected = true;
    console.log("MongoDB is connected")
  } catch (error) {
    console.log("MongoDB error is : ", error);
  }
};
