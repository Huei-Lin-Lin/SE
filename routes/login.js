var express = require('express');
// const { redirect } = require('express/lib/response');
var router = express.Router();

// 跟資料庫作比對的函數，return Promise
let checkLogin = (db,formData)=>{
    return new Promise((rs,rj)=>{
        let sql = "SELECT * FROM user WHERE username=? AND password=?";
        let params = [formData['username'],formData['password']];
        db.query(sql,params,function(err,rows){
            if(err){
                console.log("[SELECT ERROR -]",err);
                rj('DB ERROR');
            }else{
                // 表示這組的帳號密碼有錯
                if(rows.length == 0){
                    rj('login ERROR');
                }else{
                    rs(rows[0]);
                }
            }

        })
    })
}
/* post users listing. */
router.post('/',async function(req, res, next) {
    let formData = req.body;
    console.log(formData);
    try{
        // 檢查傳過來的資料與資料庫做比對
        let userData = await checkLogin(req.db,formData);
        // 把資料存到這個session裡面
        req.session.user = {
            id:userData['id'],
            username: userData['username']
        }
        res.redirect('/');
    }catch(err){
        console.log(err);
        // res.send('respond with a resource');
    }
  });
  
  module.exports = router;