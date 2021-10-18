const mongoose = require('mongoose')
const URI = 'mongodb+srv://azizbek:family1225vsburxon@adminpanel.htwy9.mongodb.net/adminPanel'

async function start(){
    
    await mongoose.connect(URI)
}

start()