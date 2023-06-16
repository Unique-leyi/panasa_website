import Head from 'next/head'
import Image from 'next/image'
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import News from '../src/components/News/News';
import Idea from '../src/components/Ui/Idea';
import Ratings from '../src/components/Ratings/Ratings';
import Resource from '../src/components/Resources/Resource';
import Sponsors from '../src/components/Sponsors/Sponsors';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - PAN African Scrabble Association (PANASA)</title>
        <meta name="description" content="The Official Website of Pan African Scrabble Association (PANASA)" />
        <meta name="keyword" content="PANASA, PANASA Official Website, Official Website of Pan African Scrabble Association (PANASA),  Pan African Scrabble Association (PANASA), PANASA Scrabble Website,PAN African Scrabble Association (PANASA), African Scrabble"/>
      </Head>
      <Hero/>
      <About/>
      <News/>
      <Ratings/>
      <Idea/>
      <Resource/>
      <Sponsors/>
    </>
  )
}
