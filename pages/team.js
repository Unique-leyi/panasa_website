import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Teams from '../src/components/Team/Teams'


export default function Team() {
  return (
      <>
        <Head>
          <title>Team - PAN African Scrabble Association</title>
          <meta name="description" content="Team PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="The Team PANASA, Team PANASA, Team PANASA African Scrabble Association, Team Gambia Scrabble Website, Team PANASA African Scrabble Association, Team PANASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/tms.png')} bgImg={"tb"}/>
       <Teams/>
      </>
  )
}
