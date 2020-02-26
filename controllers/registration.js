var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('registration page requested!');
	res.render('registration/index');
});

router.post('/', function(req, res){
		
		var user ={
			employeeName: req.body.employeeName,
			companyName: req.body.companyName,
			contractNo: req.body.contractNo,
			userName: req.body.userName,
			password: req.body.password
		};

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.userName);
				res.redirect('/home');
			}else{
				res.redirect('/registration');
			}
		});
});

module.exports = router;

