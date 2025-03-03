const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat : String, // 메시지 내용
        user : { // 메시지를 보낸 유저정보
            id : {
                type : mongoose.Schema.ObjectId,
                ref : "User",
            },
            name : String,
        },
    },
    {timestamp : true}
);

module.exports = mongoose.model("Chat",chatSchema);
