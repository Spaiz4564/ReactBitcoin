import { storageService } from './storage.service'
import { makeDate } from './util.service'

export const userService = {
  getUser,
  signup,
  getEmptyUser,
  transferCoins,
  getUser,
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'



function getEmptyUser() {
  return {
    name: '',
    coins: 100,
    moves: [],
  }
}

function signup(user) {
  const loggedInUser = storageService.load(STORAGE_KEY_LOGGEDIN_USER)
  if (loggedInUser) return
  storageService.store(STORAGE_KEY_LOGGEDIN_USER, user)
  return user
}


function transferCoins(contact, amount) {
  const move = {
    toId: contact._id,
    to: contact.name,
    at: makeDate(),
    amount,
  }
  const user = getUser()
  if (user.coins >= amount) {
    user.moves.push(move)
    user.coins -= amount
  } else {
    console.log(user.coins)
    console.log(amount)
    return alert('Not enough coins')
  }
  update(user)
  return user
}

function update(user) {
  storageService.store(STORAGE_KEY_LOGGEDIN_USER, user)
}


function getUser() {
  const loggedInUser = storageService.load(STORAGE_KEY_LOGGEDIN_USER)
  if (loggedInUser) return loggedInUser
  return {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [],
  }
}


