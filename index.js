app.use(express.json());

app.post('/api/lista', (req, res) => {
   const novaObra = req.body;
   lista.push(novaObra);
   res.json({ status: "sucesso" });
});

app.get('/api/lista', (req, res) => {
   res.json(lista);
});
