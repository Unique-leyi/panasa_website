import Head from 'next/head'
import Image from 'next/image'
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import News from '../src/components/News/News';
import Idea from '../src/components/Ui/Idea';
import Ratings from '../src/components/Ratings/Ratings';
import Resource from '../src/components/Resources/Resource';
import Sponsors from '../src/components/Sponsors/Sponsors';
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


export default function Home({ data, tournamentData }) {

  let responseData = {
    ratingsData: data,
    tournamentData: tournamentData,
  }

  return (
    <>
      <Head>
        <title>Home - PAN African Scrabble Association (PANASA)</title>
        <meta name="description" content="The Official Website of Pan African Scrabble Association (PANASA)" />
        <meta name="keyword" content="PANASA, PANASA Official Website, Official Website of Pan African Scrabble Association (PANASA),  Pan African Scrabble Association (PANASA), PANASA Scrabble Website,PAN African Scrabble Association (PANASA), African Scrabble"/>
      </Head>
      <Hero/>
      <About/>
      <News/>
      <RatingContext ratingData={responseData}>
        <Ratings/>
      </RatingContext>
      <Idea/>
      <Resource/>
      <Sponsors/>
    </>
  )
}
