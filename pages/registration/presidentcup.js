import Head from 'next/head'
import Payments from '../../src/components/Register/Payments/Payments'
import Receipt from '../../src/components/Register/Payments/Receipt'
import PresidentForm from '../../src/components/Register/PresidentCup/PresidentForm'
import HeroMini from '../../src/components/Ui/HeroMini'


export default function presidentcup() {
  return (
      <>
        <Head>
          <title>President{"'"}s Cup - Registration - PAN African Scrabble Association</title>
          <meta name="description" content="President's Cup - Registration PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="President's Cup - Registration PANASA, President's Cup - Registration PANASA African Scrabble Association, President's Cup - Registration Gambia Scrabble Website, PANASA President's Cup - Registration"/>
        </Head>
        <HeroMini image={require('../../src/assets/images/gsf_ratings.png')} bgImg={"tb"}/>
        <PresidentForm/>
        {/* <Receipt/> */}
        {/* <Payments/> */}
      </>
  )
}