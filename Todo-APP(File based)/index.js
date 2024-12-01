const express = require('express');
const fs = require('fs/promises')
const path = require('path')

const app = express();
const router = express.Router()


const PORT = 5000

app.use(express.json());


const todosFile = path.join(__dirname,'todo.json')
// console.log(__dirname,'todo.json')

// checking if file exists
async function fileExists(){
    try {
        await fs.access(todosFile)
    } catch {
        await fs.writeFile(todosFile, JSON.stringify([]))
    }
}

// read todos data -> todo.json
async function readTodos (){
    await fileExists()
    const todos = await fs.readFile(todosFile,'utf-8');
    return JSON.parse(todos); ;
}


async function writeTodos(todos) {
    await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));
}

// route to get all todos
app.get('/todos', async (req,res)=>{
    const todos = await readTodos()
    if(!todos) res.json({message: "No todos till now !!"})
    res.json(todos)
})

// route to post todos

app.post('/todos/create',async (req,res)=>{
    const {todo} = req.body;
    if(!todo) return res.status(400).json({error:" Todo can't be empty!! "})
    res
    const todos = await readTodos()
    const id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    const newTodo = {
        id: id,
        todo: todo
    }
    todos.push(newTodo);
    await writeTodos(todos);
    res.status(201).json({message : "Task added successfully !!!", todo}) 
})

// update the todo
app.put('/todos/update/:id', async(req,res)=> {
    const {id} = req.params
    const {todo} = req.body

    if(!todo) return res.status(400).json({error: "No todo found with given id"})
    
    const todos = await readTodos();
    const index = todos.findIndex(t=>t.id === id)

    if(index === -1) {
        return res.status(404).json({ error: "Todo not found!" });
    }

    todos[index].todo = todo
    await writeTodos(todos)
    res.json({ message: "Todo updated successfully!", updatedTodo: todos[index] });

})

app.delete('/todos/delete/all', async (req,res) =>{
    await writeTodos([]);
    res.json({message: "All todos cleared"})
})

app.delete('/todos/delete/:id', async (req,res) => {
    const { id } = req.params;
    const todos = await readTodos()

    const index = todos.findIndex(t => t.id == id);
    if (index === -1) {
        return res.status(404).json({ error: "Todo not found!" });
    }
    const deletedTodo =todos.splice(index, 1);
    await writeTodos(todos)
    res.json({message: "Task deleted successfully", deletedTodo})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})