var path = require("path");

module.exports = function (app) {
	// This will route the user to the home page
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
}
