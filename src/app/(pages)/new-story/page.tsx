import type { Metadata } from 'next'

import { Editor } from '@/client/components/new-story/editor'

export const metadata: Metadata = {
  title: 'Nueva historia - PagePal'
}

export default async function WritePage() {
  return (
    <>
      <main className='px-10 mt-20'>
        <Editor />
      </main>
    </>
  )
}
