const mongoose = require('mongoose')

const  TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

//collections
const TodoModel = mongoose.model("todos",TodoSchema)
module.exports = TodoModel