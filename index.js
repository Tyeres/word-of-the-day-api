const app = require('express')();
const PORT = 8080;

const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);

app.get('/day', (req, res)=>{
    res.status(200).send(dayOfYear)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

