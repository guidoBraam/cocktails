import cocktailMessage from "../models/cocktailsMessage.js"

export const getCocktails = async (req, res) => {
    try {
        const cocktailMessages = await cocktailMessage.find();

        console.log(cocktailMessage)

        res.status(200).json(cocktailMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createCocktail = async (req, res) => {
    const cocktail = req.body;

    const newCocktail = new cocktailMessage(cocktail)

    try {
        await newCocktail.save();
        res.status(201).json(newCocktail)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}