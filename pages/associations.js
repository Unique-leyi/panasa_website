import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import Association from '../src/components/Associations/Association'
import apiRoute from '../src/components/util/axios-helper';
import AssociationContext from '../context/AssociationsContext';

export const getServerSideProps = async () => {
  let data = null;
  let ratingsData = null;

  try {
    const getAssociations = await apiRoute(`/api/association/`);
    const associations = await getAssociations.get();

    // Get the ratings
    const lastResult = await apiRoute('/api/tournament/last-record');
    const res = await lastResult.get();

    const getRatings = await apiRoute(`/api/tournament/${res.data.id}/ratings`);
    const ratings = await getRatings.get();
    ratingsData = ratings.data;

    
    if(associations.data) {
      data = associations.data;
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data, ratingsData },
  }
}

export default function Associations({ data, ratingsData }) {

  const responseData = {
    associationData: data,
    ratings: ratingsData
  }


  return (
      <>
        <Head>
          <title>Association - PAN African Scrabble Association</title>
          <meta name="description" content="Association PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Association PANASA, Association PANASA African Scrabble Association, Association Gambia Scrabble Website, Association PANASA African Scrabble Association, Association PANASAASA"/>
        </Head>
       <HeroMini image={require('../src/assets/images/association.png')} bgImg={"t4"}/>
       <AssociationContext associationData={responseData}>
          <Association/> 
       </AssociationContext>
      </>
  )
}
