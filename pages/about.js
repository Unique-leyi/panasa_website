import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import SectionAbout from '../src/components/Ui/SectionAbout'
import Vision from '../src/components/Ui/Vision'
import Awards from '../src/components/Awards/Awards'
import Sponsors from '../src/components/Sponsors/Sponsors'


export default function about() {
  return (
      <>
        <Head>
          <title>About - PAN African Scrabble Association</title>
          <meta name="description" content="About PAN,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="About PANASA, About PANASA African Scrabble Association, About Gambia Scrabble Website, About-Us PANASA African Scrabble Association, About-Us PANASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/gsf_about.png')} bgImg={"t5"}/>
       <SectionAbout/>
       <Vision/>
       <Awards/>
       <Sponsors/>
      </>
  )
}
