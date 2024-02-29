import { SectionAbout } from '@/client/components/about-us/section-about'
import { SectionLinks } from '@/client/components/about-us/section-links'
import { ArticleDescription } from '@/client/components/about-us/article-description'

export default function AboutUsPage() {
  return (
    <main className='container mx-auto my-0 mt-5'>
      <SectionAbout />
      <ArticleDescription />
      <SectionLinks />
    </main>
  )
}
