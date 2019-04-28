import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/BuTouErTwo', {useNewUrlParser: true});

const errLogSchema = mongoose.Schema({
    name: {type: String, required: true},
    message:{type: String, required: true},
    stack:{type: String, required: true},
    time: {type: Date,default: Date.now}
})
export default mongoose.model('errLog',errLogSchema)
