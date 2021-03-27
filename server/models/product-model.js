const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true,
        },
        product_description: {
            type: String,
            required: true,
        },
        product_initial_price: {
            type: Number,
            required: true,
        },
        product_discount: {
            type: Number,
            required: true,
        },
        product_category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        product_photo: {
            data: Buffer,
            content_type: String
        },
        product_rating: {
            type: Number,
            required: true,
        },
        product_is_new: {
            type: Boolean,
            required: true,
        },
        product_size: {
            type: String,
            required: true,
        },
        product_pot_availability: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);