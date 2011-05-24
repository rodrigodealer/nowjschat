var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var User = new Schema({
	name: String,
	login: String,
	password: String
});

UserModel = mongoose.model('User', User);