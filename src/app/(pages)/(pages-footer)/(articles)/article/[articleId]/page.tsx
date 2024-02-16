export default function IdCategoryPage({ params }: { params: { articleId: string } }) {
  return (
    <div className='my-20'>
      <h1>Article: {params.articleId}</h1>
    </div>
  )
}
