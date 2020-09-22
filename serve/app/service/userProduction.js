const Service = require('egg').Service;
class UserProductionImgService extends Service {
  async uploadImg(userProductionObj) {
    var sql = `insert into upload (userid,description,upimgsrc,imgtype,imgname,imgtitle) values ("${userProductionObj.userid}","${userProductionObj.description}","${userProductionObj.upimgsrc}","${userProductionObj.imgtype}","${userProductionObj.imgname}","${userProductionObj.imgtitle}")`
    const data = await this.app.mysql.query(sql);
    return data;
  }


  async productionImg(){
    var sql=`select * from upload`
    var re=await this.app.mysql.query(sql)
    return re
  }


  async collectionProduction(infoobj){
    console.log(infoobj,6666)
    var sql=`insert into collection (userid,imgid) values (${infoobj.userid},${infoobj.id}) `
    var re=await this.app.mysql.query(sql)
    return re
  }


  async getcollectionProduction(infoobj){
    
    var sql=`select * from collection where userid=${infoobj.userid}`
    var arr1=await this.app.mysql.query(sql)
    if(arr1.length==0){
      return []
    }
    var sql2=`select * from upload where id in (`
    for(var i=0;i<arr1.length;i++){
      sql2=sql2+arr1[i].imgid+","
    }
    sql2=sql2.substring(0,sql2.length - 1)
    sql2+=")"
    console.log(sql2)
    var arr2=await this.app.mysql.query(sql2)
    return arr2

    
  }


  async getSelfProduction(infoobj){
    var sql=`select * from upload where userid=${infoobj.userid}`
    // console.log(sql,111111)
    var arr1=await this.app.mysql.query(sql)
    return arr1
  }

}
module.exports = UserProductionImgService;