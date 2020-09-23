'use strict';

const Controller = require('egg').Controller;
const path = require('path')
const fs = require('fs')

class UserController extends Controller {
    //验证码
    async verif() {
        this.ctx.body = await this.ctx.service.user.verif()
    }
    //注册
    async register() {
        // console.log(666)
        // console.log(this.ctx.request.files,11111)

        //1.如果传头像图片上来
        if (this.ctx.request.files[0]) {
            var filename1 = path.basename(this.ctx.request.files[0].filepath)
            var oldpath = `${this.ctx.request.files[0].filepath}`
            var newpath = `${__dirname}/../public/upload/userimg/${filename1}`
            fs.renameSync(oldpath, newpath)
            var imgurl = `http://localhost:7001/public/upload/userimg/${filename1}`
            this.ctx.request.body.img = imgurl
        }
        //2.如果不传头像图片上来
        else {
            this.ctx.request.body.img = "http://localhost:7001/public/upload/touxiang.jpg"
        }

        //3.把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
        this.ctx.body = await this.ctx.service.user.register(this.ctx.request.body)



    }


    //登录
    async login() {
        var result = await this.ctx.service.user.login(this.ctx.request.body)
        if (result[0]) {
            //验证通过,用户输入正确,通知浏览器做cookie缓存,后端保存用户id
            this.ctx.session.userid = result[0].id
            this.ctx.body = { code: 2002, info: "登录成功,接下来请求任何接口都不用传账号密码" }
        } else {
            this.ctx.body = { code: 4003, info: "密码或账号错误" }
        }
    }



    //用户信息，头像，昵称
    async userinfo() {
        const { ctx } = this;
        console.log("11111111", ctx.session.userid);
        var res = await ctx.service.user.userinfo()
        ctx.body = res;
    }
    // 退出登录
    async destroy() {
        const { ctx } = this;
        // var res = await ctx.service.user.destroy()
        // ctx.body = res;
        if (!ctx.session.userid) {
            this.ctx.body = { code: 4006, info: "本来就没有登录" }
        } else {
            ctx.session.userid=null
            this.ctx.body = { code: 2008, info: "已经退出登录" }
        }

    }

    // 修改昵称
    async username() {
        const { ctx } = this;
        if (!ctx.session.userid) {
            this.ctx.body = { code: 4006, info: "未登录" }
        } else {
            var re = await ctx.service.user.username(ctx.request.query);
            this.ctx.body = { code: 2009, info: "昵称修改成功" }
        }

    }
    // 修改头像
    async setUserImg() {
        const { ctx } = this;
        if (!ctx.session.userid) {
            this.ctx.body = { code: 4006, info: "未登录" }
        }
        //如果传头像图片上来
        else if (this.ctx.request.files[0]) {
            var filename1 = path.basename(this.ctx.request.files[0].filepath)
            var oldpath = `${this.ctx.request.files[0].filepath}`
            var newpath = `${__dirname}/../public/upload/userimg/${filename1}`
            fs.renameSync(oldpath, newpath)
            var imgurl = `http://localhost:7001/public/upload/userimg/${filename1}`
            this.ctx.request.body.img = imgurl
            this.ctx.request.body.userid=ctx.session.userid
            await this.ctx.service.user.setUserImg(this.ctx.request.body)
            this.ctx.body = {code: 20010, info: "修改成功",imgurl:imgurl}            
        }
        //如果不传头像图片上来
        else {
            //3.把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
            this.ctx.body = {code: 4009, info: "未传头像"}    
        }










    }






}

module.exports = UserController;
