const express = require('express');

const app = express();

// console.log(app);

//criando uma rota



// app.get('/', (request, response) => {
//     response.send('Olá, Mundo!');
// })

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 100'
    ])
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])

})


app.listen(3333);

// app.listen(3000, () => {
//     console.log('Servidor rodando!')
// })