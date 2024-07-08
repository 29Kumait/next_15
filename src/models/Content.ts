import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
});

const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);
export default Content;
