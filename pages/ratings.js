import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import RatedContainer from '../src/components/Ui/RatedContainer';
import apiRoute from '../src/components/util/axios-helper';
import RatingContext from '../context/RatingsContext';

export const getServerSideProps = async () => {
  let data = null;
  let tournamentData = null;

  try {
    const lastResult = await apiRoute('/api/tournament/last-record');
    const res = await lastResult.get();
    tournamentData =  res.data;

    const getRatings = await apiRoute(`/api/tournament/${res.data.id}/ratings`);
    const ratings = await getRatings.get();

    if(ratings.data) {
      data = ratings.data;
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data, tournamentData },
  }
}

export default function ratings({ data, tournamentData }) {

  let responseData = {
    ratingsData: data,
    tournamentData: tournamentData,
  }

  return (
      <>
        <Head>
          <title>Ratings - PAN African Scrabble Association</title>
          <meta name="description" content="Ratings PANASA,  PANASA is a PAN African Scrabble Association"/>
          <meta name="keyword" content="Ratings PANASA, Ratings PANASA African Scrabble Association, Ratings Gambia Scrabble Website, PANASA Ratings"/>
        </Head>
        <HeroMini image={require('../src/assets/images/gsf_ratings.png')} bgImg={"t1b"}/>
        <RatingContext ratingData={responseData}>
          <RatedContainer/>
        </RatingContext>
      </>
  )
}