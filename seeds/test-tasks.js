/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'run' },
    { id: 2, task: 'walk' },
    { id: 3, task: 'eat' },
  ])
}

//console.log('todos:', await seedAdd(knex))
