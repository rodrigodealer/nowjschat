var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var Talk = new Schema({
	name: String,
	message: String,
	atendimentoId: Number
});

TalkModel = mongoose.model('Talk', Talk);