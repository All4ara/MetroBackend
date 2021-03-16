import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    address: String,
    propertyType: String,
    name: String,
    agent: String,
    selectedFile: String,
    price: String,
    likes: {
        type: [String],
        default: [],
    },
    soldOn: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;