// 스키마 : 데이터의 설계도. 데이터의 규칙

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "User must type name"],
        unique : true,
    },
    token : { // 유저의 연결 ID 정보
        type : String,
    },
    online : { // 유저의 온라인 정보
        type : Boolean,
        default : false,
    },
});
module.exports = mongoose.model("User",userSchema);