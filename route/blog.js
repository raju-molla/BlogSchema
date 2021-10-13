const express =require('express');
const router = express.Router();

const {Post,commnets,getComnt}= require('../controller/blog')

router.post('/post',Post);
router.post('/comment/:id',commnets);
router.get('/get-comment/:id',getComnt);

module.exports= router