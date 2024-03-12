'use client'

import 'quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs'

import { TOOLBAR } from '@/client/constants'
import { useArticleStore } from '@/client/stores/publishArticleStore'
import { PublishArticle } from '@client/components/new-story/publish-article'

export function Editor() {
  const createArticle = useArticleStore(state => state.createArticle)
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: TOOLBAR
    },
    theme: 'snow',
    placeholder:
      'Empieza por tu título :). Lo primero que escribas será tomado como el título de tu historia'
  })

  const handleClick = () => {
    createArticle({ content: quill?.getText(), banner: quill?.root.getElementsByTagName('img') })
  }

  return (
    <>
      <div className='w-full h-96 mb-20'>
        <div ref={quillRef} />
      </div>

      <PublishArticle onClick={handleClick} />
    </>
  )
}
