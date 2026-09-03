const express = require('express');
const app = express();

app.listen(3000, ()=> console.log("Escutando a porta 3000"));
app.use(express.static("Arkham Knight"))
