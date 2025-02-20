import { create } from 'zustand'
import { api } from '../services/api'

export const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  isAuth: !!localStorage.getItem('token'),
  login: async ({ email, password }) => {
    const { data } = await api.post('/users/login', { email, password })
    const { user, token } = data

    set({
      user,
      token,
      isAuth: true
    })

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
  },
  register: async ({ firstName, lastName, email, password, gender }) => {
    await api.post('/users', { firstName, lastName, email, password, gender })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({
      user: null,
      token: null,
      isAuth: false
    })
  }
}))