module.exports = function Route(app){
	app.get('/', function(req,res){
		res.render("index"); 								//render index.ejs (form) view.
	})
	app.post('/result', function(req,res){ 					//post route for adding data from form.
		submitted_info = {
			name: req.body.name, 							//inside the request's body is a property called name.
			dojo_location: req.body.dojo_location,
			favorite_language: req.body.favorite_language,
			comment: req.body.comment
		};
		res.render("result", {user_data: submitted_info});	//rendering result view with an object. That object's key is user_data and value is another object (submitted info). This let's you do stuff like user_data.name
	})
}