const { Router } = require('express');
const router = Router();
const pool = require('../database');

router.get('/',(req,res) => res.json({text: 'hello world'}));

module.exports = router;