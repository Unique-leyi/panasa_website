import Head from 'next/head'
import HeroMini from '../../src/components/Ui/HeroMini'
import Tournaments from '../../src/components/Tournaments/Tournaments'
import Packages from '../../src/components/Tournaments/Packages'
import Prizes from '../../src/components/Tournaments/Prizes'
import Notes from '../../src/components/Tournaments/Notes'
import Partnership from '../../src/components/Tournaments/Partnership'


export default function index() {
  return (
      <>
        <Head>
          <title>Tournaments - PAN African Scrabble Association</title>
          <meta name="description" content="Tournaments PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Tournaments PANASA, Tournaments PANASA African Scrabble Association, Tournaments Gambia Scrabble Website, PANASA Tournaments"/>
        </Head>
        <HeroMini image={require('../../src/assets/images/gsf_ratings.png')} bgImg={"tb"}/>
        <Tournaments/>
        <Packages/>
        <Partnership/>
        <Prizes/>
        <Notes/>
      </>
  )
}