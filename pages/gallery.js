import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Catalogue from '../src/components/Catalogue/Catalogue'

export default function gallery() {
  return (
      <>
        <Head>
          <title>Gallery - PAN African Scrabble Association</title>
          <meta name="description" content="Gallery PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Gallery PANASA, Gallery PANASA African Scrabble Association, Gallery - Gambia Scrabble Website, Gallery PANASA, Check Out Our Gallery PANASA, PANASA African Scrabble Association Gallery Sections"/>
        </Head>
        <HeroMini image={require('../src/assets/images/gallery.png')} bgImg={"t1"}/>
        <Catalogue/>
      </>
  )
}