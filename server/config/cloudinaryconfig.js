const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

//upload image
const uploadImage = async (filepath) => {
    try {
        const uploadedResponse = await cloudinary.uploader.upload(filepath);
        const url = cloudinary.url(uploadedResponse.public_id, {
            transformation: [
                {
                    crop: 'fill',
                    gravity: 'auto',
                },
                {
                    quality: 'auto',
                    fetch_format: 'auto',
                }
            ]
        })
        return url;
    } catch (error) {
        console.log(error);
    }
}

module.exports ={ uploadImage };