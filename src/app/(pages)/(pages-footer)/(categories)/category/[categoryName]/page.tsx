export default function IdCategoryPage({ params }: { params: { categoryName: string } }) {
  return (
    <div className='my-20'>
      <h1>Category: {params.categoryName}</h1>
    </div>
  )
}
