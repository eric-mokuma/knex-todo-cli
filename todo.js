#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const x = userInputs[3]

switch (cmd) {
  case 'show':
    await commands.list()
    break
  case 'delete':
    await commands.deleteTask(x)
    break
  case 'add':
    await commands.addTask(x)
    break
  case 'update':
    await commands.updateTask(x)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
