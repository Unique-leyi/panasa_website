import Head from 'next/head'
import AyscForm from '../../src/components/Register/AYSC/AYSCForm'
import HeroMini from '../../src/components/Ui/HeroMini'


export default function africanyouthcup() {
  return (
      <>
        <Head>
          <title>African Youth Scrabble Cup - Registration - PAN African Scrabble Association</title>
          <meta name="description" content="African Youth Scrabble Cup - Registration PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="African Youth Scrabble Cup - Registration PANASA, African Youth Scrabble Cup - Registration PANASA African Scrabble Association, African Youth Scrabble Cup, PANASA African Youth Scrabble Cup - Registration"/>
        </Head>
        <HeroMini image={require('../../src/assets/images/gsf_ratings.png')} bgImg={"tb"}/>
        <AyscForm/>
      </>
  )
}