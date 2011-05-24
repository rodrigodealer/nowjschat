mongoose = require('mongoose');
require('../../model/user.js');

describe("User", function() {
	var _user;
	
	beforeEach(function() {
		_user = new UserModel();
		_user.name		= "Rodrigo";
		_user.password	= "123456";
		_user.login		= "rodrigodealer";
	});
	
	it("should be valid", function() {
		assertThatUserIsValid();	
	});
	
	var assertThatUserIsValid = function() {
		expect(_user.name).toEqual("Rodrigo");
		expect(_user.password).toEqual("123456");
		expect(_user.login).toEqual("rodrigodealer");
	};
});