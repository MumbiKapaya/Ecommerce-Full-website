

const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, requires: true },
        description: { type: String, require: true },
        image: { type: String, requires: true },
        size: { type: Array },
        color: { type: Array },
        categories: { type: Array },
        price: { type: Number, requires: true },
        inStock: { type: Boolean, default: true }
        
    },
    {timestamps:true},
);
module.exports = mongoose.model("product", ProductSchema)