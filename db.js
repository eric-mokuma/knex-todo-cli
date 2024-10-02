import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export function delTodo(id) {
  return db('todos').where({ id }).del()
}

export function addTodo(task) {
  return db('todos').insert({ task })
}

export function updateTodo(id) {
  return db('todos').where({ id }).update()
}
