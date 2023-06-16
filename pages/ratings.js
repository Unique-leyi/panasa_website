import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import RatedContainer from '../src/components/Ui/RatedContainer'


export default function ratings() {
  return (
      <>
        <Head>
          <title>Ratings - PAN African Scrabble Association</title>
          <meta name="description" content="Ratings PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Ratings PANASA, Ratings PANASA African Scrabble Association, Ratings Gambia Scrabble Website, PANASA Ratings"/>
        </Head>
        <HeroMini image={require('../src/assets/images/gsf_ratings.png')} bgImg={"t1b"}/>
        <RatedContainer/>
      </>
  )
}