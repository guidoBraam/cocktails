import mongoose from "mongoose";

const cocktailSchema = mongoose.Schema({
    name: String,
    category: String,
    alcoholic: Boolean,
    instructions: String,
    ingredients: [String],
    measures: [String]
})

const cocktailMessage = mongoose.model('cocktailMessage', cocktailSchema);

export default cocktailMessage