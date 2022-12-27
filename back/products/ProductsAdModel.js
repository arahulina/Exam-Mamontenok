// Подключение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const productSchema = new mongoose.Schema({
    author_id: {type: mongoose.ObjectId},
    created_at: Date,
    title: String,
    description: String,
    price: Number,
    imgMain: String, // main product`s picture
    images: [String], // other pictures
    category: String, // product`s category
    type: String, // type of product (new, sale, trend,....)

    // One To Many
    favorites: [],
    rating: [], // (ad_id)  {level, user_id} - оценки пользователей
    comments: [], // (ad_id)  {message, user_id} - комментарии пользователей

    // поля які ще під питанням
    isOpen: Boolean, // Актуальний товар чи ні
});

module.exports = mongoose.model("products", productSchema);