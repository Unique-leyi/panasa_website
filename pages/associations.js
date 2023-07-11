import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Association from '../src/components/Associations/Association'
import apiRoute from '../src/components/util/axios-helper';
import AssociationContext from '../context/AssociationsContext';

export const getServerSideProps = async () => {
  let data = null;

  try {
    const getAssociations = await apiRoute(`/api/association/`);
    const associations = await getAssociations.get();

    if(associations.data) {
      data = associations.data;
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data },
  }
}

export default function Associations({ data }) {

  return (
      <>
        <Head>
          <title>Association - PAN African Scrabble Association</title>
          <meta name="description" content="Association PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Association PANASA, Association PANASA African Scrabble Association, Association Gambia Scrabble Website, Association PANASA African Scrabble Association, Association PANASAASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/association.png')} bgImg={"t4"}/>
       <AssociationContext associationData={data}>
          <Association/> 
       </AssociationContext>
      </>
  )
}
