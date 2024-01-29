import { SectionAbout } from '@/client/components/about-us/section-about'
import { ArticleDescription } from '@/client/components/about-us/article-description'
import { SectionLinks } from '@/client/components/about-us/section-links'

export default function AboutUsPage() {
  return (
    <main className='w-[85vw] lg:w-[70vw] mx-auto my-0'>
      <SectionAbout />
      <ArticleDescription />
      <SectionLinks />
    </main>
  )
}
