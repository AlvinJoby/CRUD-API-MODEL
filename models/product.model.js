const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }
    },

    {
        timeStamps: true
    }

)

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;