const todo = require("../models/todoModel")

const todoAdd = async(req, res) => {

    try {
        const todos = await todo.findOne({ name: req.body.name })
        if (todos) {
            return res.status(400).json({
                success: false,
                message: "Bu isimde kayıt mevcut"
            })
        }

        const todoAdds = new todo(req.body)
        await todoAdds.save().then(() => {
            return res.status(201).json(todoAdds)
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                message: "Kayıt oluşturulurken hata oluştu!!!" + err
            })

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "todo eklenirken Sunucuya Başlanamadı " + error
        })
    }
}
const todoGetAll = async(req, res) => {
    const { page } = req.query
    const limit = 50
    const skip = Number(page - 1) * limit
    try {
        const TodoAll = await todo.find({}).limit(limit).skip(skip)
        return res.status(200).json({
            success: true,
            data: TodoAll
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Sunucu hatası " + error
        })
    }



}

const todoGet = async(req, res) => {
    const { id } = req.params
    try {
        const todoGet = await todo.findById(id)
        if (todoGet) {
            return res.status(200).json(todoGet)
        } else {
            return res.status(400).json({
                success: false,
                message: "kayıt bulunamadı"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "kayıt bulunamadı"
        })
    }
}

const todoUpdate = async(req, res) => {
    const { id } = req.params
    try {

        const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
        if (todoUpdate) {
            return res.status(201).json({
                success: true,
                message: "Güncelleme başarılı"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Güncelleme Başarısız !!!"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Sunucu hatası " + error
        })
    }
}
const todoDelete = async(req, res) => {
    const { id } = req.params
    try {
        const todoDelete = await todo.findByIdAndDelete(id)
        if (todoDelete) {
            return res.status(201).json({
                success: true,
                message: "silme başarılı"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "silme Başarısız !!!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Sunucu hatası " + error
        })
    }
}

module.exports = {
    todoAdd,
    todoGetAll,
    todoUpdate,
    todoDelete,
    todoGet
}