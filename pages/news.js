import Head from 'next/head'
import Blog from '../src/components/Blog/Blog'
import HeroMini from '../src/components/Ui/HeroMini'


export default function News() {
  return (
      <>
        <Head>
          <title>News - PAN African Scrabble Association</title>
          <meta name="description" content="News PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="News PANASA, News PANASA African Scrabble Association, News Gambia Scrabble Website, News-Us PANASA African Scrabble Association, News PANASAASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/newsandevents.png')} bgImg={"t5"}/>
       <Blog/>
      </>
  )
}
