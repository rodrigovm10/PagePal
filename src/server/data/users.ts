import axios from 'axios'

const domain = process.env.NEXT_PUBLIC_APP_URL

export const getUsers = async () => {
  try {
    const response = await axios.get(`${domain}api/users`)
    const users = response.data

    return users
  } catch (error) {
    console.log('Error al obtener los usuarios', error)
  }
}

export const followUser = async ({ id }: { id: string }) => {
  try {
    const response = await axios.post(`${domain}api/users/follow`, { id })
    const user = response.data
  } catch (error) {
    console.log('Error al seguir al usuario', error)
  }
}
