let loginCheck = (req, res, next) => {
    if(req.session.user == undefined){
        res.redirect('/login');
    }
    else{
        next();
    }
}

// 把 loginCheck 輸出，讓其他檔案可以把它當作一個 module 使用
module.exports = loginCheck;

