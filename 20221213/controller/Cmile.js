const { User } = require("../model");
const { Trip } = require("../model");

exports.home = (req, res)=>{res.render('home');}

exports.idread = async (req,res)=>{
  let result = await User.findAll({ 
    where: {id: req.query.id}, 
    limit: 1
    });
  console.log(result);
  if(result.length>0) res.send(true);
  else res.send(false);
}

exports.signup = async (req,res)=>{
    let data = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name
        //mbti_ok: req.body.mbti_ok 
        //auth: req.body.auth 
        //mbti 검사한 경우는 추후에 추가 
    }
    let result = await User.create(data);
      console.log(result.dataValues.id);
      res.send(result.id);
}

exports.yap = async (req, res)=>{
    let result = await User.findAll();
    let result2 = await Trip.findAll();
    if(result[0].dataValues.mbti == result2[0].dataValues.mbti)
    console.log(result2[0].dataValues);
    res.send(`a님의 여행지는${result2[0].dataValues.info}입니다!`);
}