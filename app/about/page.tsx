import AboutSection1 from '@/components/about/AboutSection1'
import AboutSection2 from '@/components/about/AboutSection2'
import AboutSection3 from '@/components/about/AboutSection3'
import AboutSection4 from '@/components/about/AboutSection4'
import Section6 from '@/components/Section6'
import React from 'react'

const page = () => {
  return (
    <main>
      <div>
        {/* <AboutSection1 /> */}
        <AboutSection2 />
        <AboutSection3 />
        <AboutSection4 />
        <Section6 />
      </div>
    </main>
  )
}

export default page