 import express from 'express'
 
 import { getCocktails, createCocktail } from '../controllers/cocktails.js';

 const router = express.Router();

 router.get('/', getCocktails);
 router.post('/new', createCocktail);

 export default router;