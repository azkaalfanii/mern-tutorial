const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

        text :{
            type: String,
            required: [true, 'Please add a text value']
@@ -11,4 +17,4 @@ const goalSchema = mongoose.Schema(
    }
)


module.exports = mongoose.model('Goal', goalSchema) 