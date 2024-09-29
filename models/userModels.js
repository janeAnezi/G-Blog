const { schema , model} = require('mongoose')

const userSchema = new schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    posts: {type: number, default: 0},
})