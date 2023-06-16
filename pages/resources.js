import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import ResourceContainer from '../src/components/Ui/ResourceContainer'

export default function resources() {
  return (
      <>
        <Head>
          <title>Resources - PAN African Scrabble Association</title>
          <meta name="description" content="Resources PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Resources PANASA, Resources PANASA African Scrabble Association, Resources Gambia Scrabble Website, Resource PANASA African Scrabble Association, Resources PANASA"/>
        </Head>
        <HeroMini image={require('../src/assets/images/resources.png')} bgImg={"t3"}/>
        <ResourceContainer/>
      </>
  )
}