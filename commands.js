import { getTodos, close, delTodo, addTodo, updateTodo } from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTask(id) {
  try {
    await delTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTask(task) {
  try {
    await addTodo(task)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTask(id) {
  try {
    await updateTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
