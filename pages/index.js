import Head from 'next/head'
import Image from 'next/image'

import { Section } from '../components/Section'
import { Section2 } from '../components/Section2'
export default function Home() {
  return (
    <div className="bg-emerald-200">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next js with Global State through Context API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='flex justify-center font-bold text-2xl p-8'>Global State</h1>

      <Section/>
      <Section2/>

    </div>
  )
}
