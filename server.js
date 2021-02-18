const express = require('express');
const app = epress();
app.get('/',(req,res)=> res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server statrted on port ${PORT}`));