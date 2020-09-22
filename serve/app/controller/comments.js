'use strict';
const Controller = require('egg').Controller;
class CommentsController extends Controller {
    //获取某个图片所有评论
  async getallcomments() {
    const { ctx } = this;
    var imgId=this.ctx.request.query.imgid
    var sql=`select * from comments where imgid=${imgId}`
    ctx.body = await this.app.mysql.query(sql);
  }


  //
//   12.对某个图片进行评论
// url:    /setComments
// 请求方式:   get
// 请求条件:用户必须已经登录
// 参数:  
// imgid   图片的id  
// comtext  评论的内容
// 返回数据示例:得到以后自己打印
  async setComments() {
    const { ctx } = this;
    //如果没有登录  
    if (!this.ctx.session.userid) {
        this.ctx.body = { code: 4006, info: "用户未登录" }
    }
    else {

    var sql1=`select * from userinfo`
    var userinfo=await this.app.mysql.query(sql1)
    userinfo=userinfo[0]

    var imgid=this.ctx.request.query.imgid//num
    var comtext=this.ctx.request.query.comtext//string
    var userid=this.ctx.session.userid//num
    var username=userinfo.username//string
    var userimg=userinfo.img//string


    var sql=`insert into comments (imgid,comtext,userid,username,userimg) values (${imgid},${comtext},${userid},${username},${userimg})`
    var re2=await this.app.mysql.query(sql);
    ctx.body = {code:2007,info:"评论成功",dataBaseInfo:re2}
    }


   
  }
  
}
module.exports = CommentsController;