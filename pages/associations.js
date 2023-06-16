import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Association from '../src/components/Associations/Association'


export default function Associations() {
  return (
      <>
        <Head>
          <title>Association - PAN African Scrabble Association</title>
          <meta name="description" content="Association PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Association PANASA, Association PANASA African Scrabble Association, Association Gambia Scrabble Website, Association PANASA African Scrabble Association, Association PANASAASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/association.png')} bgImg={"t4"}/>
       <Association/>
       
      </>
  )
}
