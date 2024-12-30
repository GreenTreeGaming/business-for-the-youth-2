import ChapterSection1 from '@/components/start-chapter/ChapterSection1'
import ChapterSection2 from '@/components/start-chapter/ChapterSection2'
import ChapterSection3 from '@/components/start-chapter/ChapterSection3'
import React from 'react'

const page = () => {
  return (
    <main className="bg-[#f8f4ec]">
      <div>
        <ChapterSection1 />
        <ChapterSection2 />
        <ChapterSection3 />
      </div>
    </main>
  )
}

export default page