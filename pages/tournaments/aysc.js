import Head from 'next/head'
import HeroMini from '../../src/components/Ui/HeroMini'
import Aysc from '../../src/components/AYSC/Aysc'
import AYSCPrizes from '../../src/components/AYSC/AYSCPrizes'
import AYSCNotes from '../../src/components/AYSC/AYSCNotes'


export default function aysc() {
  return (
      <>
        <Head>
          <title>AYSC Tournaments - PAN African Scrabble Association</title>
          <meta name="description" content="AYSC Tournaments PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="AYSC Tournaments PANASA, AYSC Tournaments PANASA African Scrabble Association, AYSC Tournaments Gambia Scrabble Website, PANASA AYSC Tournaments"/>
        </Head>
        <HeroMini image={require('../../src/assets/images/gsf_ratings.png')} bgImg={"tb"}/>
        <Aysc/>
        <AYSCPrizes/>
        <AYSCNotes/>
      </>
  )
}