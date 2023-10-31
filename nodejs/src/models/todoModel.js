const mongoose = require("mongoose");
const todoShema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true //Başında ve sonundaki gereksiz boşlumları yok eder
    },
    description: {
        type: String,
        require: true,
        trim: true //Başında ve sonundaki gereksiz boşlumları yok eder
    },
    complated: {
        type: Boolean,
        default: false
    }
}, {
    collation: { locale: 'en_US', strength: 1 }, //bunu kullanmadığımız zaman find işlemlerinde hata vermektedir
    timestamps: true
})

const todo = mongoose.model("todos", todoShema)
module.exports = todo