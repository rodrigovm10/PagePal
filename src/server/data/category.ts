export const fetchCategory = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/category')
    const data = await response.json()
    return data
  } catch {}
}
