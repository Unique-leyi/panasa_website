import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Info from '../src/components/Ui/Info'
import Map from '../src/components/Ui/Map'


export default function contact() {
  return (
      <>
        <Head>
          <title>Contact - PAN African Scrabble Association</title>
          <meta name="description" content="Contact PANASA,  PAN is an PAN African Scrabble Association"/>
          <meta name="keyword" content="Contact PANASA, Contact PAN African Scrabble Association, Contact Gambia Scrabble Website, Contact-Us PAN African Scrabble Association, Contact-Us PANASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/gsf_contact.png')} bgImg={"t1"}/>
       <Info/>
       <Map/>
      </>
  )
}
