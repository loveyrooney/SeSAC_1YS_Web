//env는 비번이나 api키등을 저장하고 환경변수로 설정.
console.log(process.env.PORT);

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:'./common.env'});
dotenv.config({path: path.join(__dirname, './common.env')});

