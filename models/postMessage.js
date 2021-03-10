import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    address: String,
    propertyType: String,
    agent: String,
    selectedFile: String,
    price: String,
    likeCount: {
        type: Number,
        default: 0
    },
    soldOn: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;