import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/BuTouEr')

const advertSchema = mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String,required: true},
    link: {type:String,required: true},
    start_time: {type:Date,default: Date.now},
    end_time: {type:Date, required: true},
    create_time: {type:Date, default: Date.now},
    last_modified: {type:Date, default: Date.now}
})

export default mongoose.model('Advert',advertSchema)
