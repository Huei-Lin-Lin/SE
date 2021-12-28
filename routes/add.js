var express = require('express');
var router = express.Router();

let insertItem = (db, uid,data) => {
    return new Promise((rs,rj) => {
        let sql = 'INSERT INTO `item`(`uid`, `title`, `date`, `time`, `ps`) VALUES (?,?,?,?,?)';
        let params =[uid, data['title'], data['date'], data['time'], data['ps']];
        db.query(sql, params, function(err, result){
            if(err){
                console.log("{INSERT ERROR} -", err);
                rj('DB ERROR');
            }else{
                rs('SUCCESS');
            }
        })
    })
}

/* POST users listing. */
router.post('/',async function(req, res, next) {
  let formData = req.body;
  console.log(formData);
  try{
      await insertItem(req.db, req.session.user.id, formData);
      res.send('OK');
  }catch(error){
      console.log(error);
      res.send('BAD');
  }
});

module.exports = router;
