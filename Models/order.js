const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {

        userEmail:{
            type: String,
            required: true,
        },

        userName:{
            type: String,
            required: true,
        },

        userPhone:{
            type: Number,
            required: true
        },

        deliveryAddress:{
            type: String,
            required: true,
        },

        product:{
            type: Object,
            required: true
        },

        quantity:{
            type: Number,
            required: true
        },

        payment:{
            type: String,
            required: true,
            enum: ["COD", "Online"],
        },

        status:{
            type: String,
            default: "Pending",
            required: true,
            enum: ["Pending", "Dispatched", "Delivered", "Cancelled"],
        },

        customization:{
            type: Object
        },

        approvalId:{
            type: String
        },

        date:{
            type: Date,
            required: true
        }
    }
);

module.exports = mongoose.model("order", orderSchema);
