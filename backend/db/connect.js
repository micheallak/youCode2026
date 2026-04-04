import mongoose from 'mongoose'

export default connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
}

