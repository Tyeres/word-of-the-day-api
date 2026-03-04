const app = require('express')();
const PORT = 8080;

const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);

app.get('/day', (req, res)=>{
    if (dayOfYear == 62) {
        res.status(200).send({
        word: 'mathematics',
        definition: 'the abstract science of number, quantity, and space, either as abstract concepts (pure mathematics), or as applied to other disciplines such as physics and engineering (applied mathematics)',
        part_of_speech: 'Noun',
        example: 'a taste for mathematics'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

