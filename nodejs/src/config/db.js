const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb ye başarılı bir şekilde bağlanıldı")
}).catch((err) => {
    console.log("vari tabanına bağlanılamadı " + err)
})