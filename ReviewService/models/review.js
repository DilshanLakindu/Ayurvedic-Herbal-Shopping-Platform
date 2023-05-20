import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
	rating: {
		type: String,
	},
	discription: {
		type: String,
	},
});

export default model("Review", ReviewSchema);
