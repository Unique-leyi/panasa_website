import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Partners from '../src/components/Partners/Partners'


export default function SponsporsandPartners() {
  return (
      <>
        <Head>
          <title>Sponsors and Partners - PAN African Scrabble Association</title>
          <meta name="description" content="Sponsors and Partners PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Sponsors and Partners PANASA, Sponsors and Partners PANASA African Scrabble Association, Sponsors and Partners Gambia Scrabble Website, PANASA Sponsors and Partners"/>
        </Head>
        <HeroMini image={require('../src/assets/images/newsandevents.png')} bgImg={"tb"}/>
        <Partners/>
      </>
  )
}