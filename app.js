const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 백엔드 서버는 같은 도메인이 아닌이상 보안상의 이유로 프론트엔드 서버의 접근을 막기때문에
// 접근을 풀어주기 위해 cors 설정 -> 어떤 주소로든 접근을 허가(테스트용?)
const cors = require("cors");
app.use(cors());

require('dotenv').config(); // .env 가져오기

mongoose.connect(process.env.DB,{ // DB 주소는 환경변수로 선언하는게 좋음
    useNewUrlParser : true, // 몽고DB 연결 문자열 파싱 관련 옵션. (새 parser로 변경되어 새 parser에서 에러날 경우 예전 parser로 롤백되는 옵션)
    useUnifiedTopology: true, // 몽고DB 드라이버 서버 관련 옵션 (드라이버 서버 검색 및 모니터링, 서버 선택 및 최대 부실 사양을 완벽하게 지원)
}).then(()=> console.log("connected to database")); // 주소로 연결되면 로그

module.exports = app;


