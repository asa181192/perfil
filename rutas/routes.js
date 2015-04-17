module.exports = function (app)  {

app.get ('/',function (req,res){
	res.sendfile('./perfil/index.html');
});

};

