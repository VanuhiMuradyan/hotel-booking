import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.APP_PORT
const JWT_SECRET = process.env.JWT_SECRET
const MONGO_URL = process.env.MONGO_URL
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET

if (!PORT) {
  console.error("PORT is required")  
  process.exit(1)
}

if (!JWT_SECRET) {
  
  console.error("JWT_SECRET is required")
  process.exit(1)
}

if (!MONGO_URL) {
    console.error("MONGO_URL is required")
    process.exit(1)
}

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("Cloudinary credentials are required: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET")
  process.exit(1)
}

export const env = {
    port: Number(PORT),
    jwtSecret: JWT_SECRET,
    mongoUrl: MONGO_URL,
    cloudinaryCloudName: CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: CLOUDINARY_API_KEY,
    cloudinaryApiSecret: CLOUDINARY_API_SECRET
}