import { Hero } from '@/components/sections/Hero'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pain } from '@/components/sections/Pain'
import { Legislation } from '@/components/sections/Legislation'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { Curriculum } from '@/components/sections/Curriculum'
import { OfferHighlights } from '@/components/sections/OfferHighlights'
import { CourseStructure } from '@/components/sections/CourseStructure'
import { Bonuses } from '@/components/sections/Bonuses'
import { Pricing } from '@/components/sections/Pricing'
import { AboutAuthor } from '@/components/sections/AboutAuthor'
import { FAQ } from '@/components/sections/FAQ'

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans antialiased relative">
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Legislation />
        <Curriculum />
        <TargetAudience />
        <Pain />
        <Testimonials />
        <OfferHighlights />
        <CourseStructure />
        <Bonuses />
        <Pricing />
        <AboutAuthor />
        <FAQ />
      </div>
    </div>
  )
}

export default Index
