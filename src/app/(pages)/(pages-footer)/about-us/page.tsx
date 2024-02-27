import { SectionAbout } from '@/client/components/about-us/section-about'
import { ArticleDescription } from '@/client/components/about-us/article-description'
import { SectionLinks } from '@/client/components/about-us/section-links'

export default function AboutUsPage() {
  return (
    <main className='container mx-auto my-0 mt-5'>
      <SectionAbout />
      <ArticleDescription />
      <SectionLinks />
    </main>
  )
}
