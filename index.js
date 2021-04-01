const express = require('express');
const { v4:uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projects = [];


app.get('/projects', (request, response) => {
    // const {title, owner} = request.query;
    
    return response.json(projects)
        
});


app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    
    const project = { id: uuidv4(), title, owner };

    console.log(project.id)

    projects.push(project); // esse push vai jogar a criação do nosso projeto para o nosso array
    
    return response.json(project); // sempre retornar o projeto recén criado

})

app.put('/projects/:id', (request, response) => {
    
    const params = request.params;

    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ])
})

app.listen(3333);

// app.listen(3000, () => {
//     console.log('Servidor rodando!')
// })