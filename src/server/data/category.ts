import axios from 'axios'

const domain = process.env.NEXT_PUBLIC_APP_URL

export const getCategory = async ({ name }: { name: string }) => {
  try {
    const response = await axios.get(`${domain}/api/category/${name}`)
    const category = response.data

    return category
  } catch (error) {
    console.log('Error al obtener la categoria', error)
  }
}

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${domain}/api/category?order=followers`)
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
    await axios.put(`${domain}/api/category/follow`, {
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
    await axios.put(`${domain}/api/category/unfollow`, {
      categoryName,
      userEmail
    })
  } catch (error) {
    console.log(`Error al dejar de seguir la categoria ${categoryName}`, error)
  }
}
