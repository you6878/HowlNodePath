/**
 * Created by myeongsic on 2017. 3. 29..
 */
const express = require('express');
const route = express.Router();
const user = require('../controller/user')
const auth = require('../auth/auth')
const path = require('path');



route.get('/home',(req, res) =>{

    res.sendFile(path.resolve(__dirname,'..','view','index.html' ))

})


route.get('/image',(req, res) =>{

    res.sendFile(path.resolve(__dirname,'..','images','background.jpg' ))

})


route.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated, user.updateUser)
    .delete(auth.isBasicAuthenticated, user.deleteUser)


route.route('/test')
    .get((req, res) => {

        console.log(req.query)

        res.send("확인")
    })
    .post((req, res) =>{

        console.log(req.body)
        res.send("POST방식")

    })




route.route('/test/:id')
    .get((req, res) => {
    //데이터를 업데이트, 삭제

        console.log(req)

        res.send("확인2")
    })


module.exports = route;


//Create = Post = 회원가입
//Read = Get = 로그인
//Update = Put = 회원정보수정
//Delete = Delete = 탈퇴