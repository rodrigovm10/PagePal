import axios from 'axios'

export const getCategory = async ({ name }: { name: string }) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/category/${name}`)
    const category = response.data

    return category
  } catch (error) {
    console.log('Error al obtener las cateogrias', error)
  }
}

export const getAllCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/category?order=followers')
    const categories = response.data

    return categories
  } catch (error) {
    console.log('Error al obtener las cateogrias', error)
  }
}

export const followCategory = async ({
  categoryName,
  userEmail
}: {
  categoryName: string
  userEmail: string | null | undefined
}) => {
  try {
    await axios.put('http://localhost:3000/api/category/follow', {
      categoryName,
      userEmail
    })
  } catch (error) {
    console.log(`Error al seguir la categoria ${categoryName}`, error)
  }
}

export const unfollowCategory = async ({
  categoryName,
  userEmail
}: {
  categoryName: string
  userEmail: string | null | undefined
}) => {
  try {
    await axios.put('http://localhost:3000/api/category/unfollow', {
      categoryName,
      userEmail
    })
  } catch (error) {
    console.log(`Error al dejar de seguir la categoria ${categoryName}`, error)
  }
}
