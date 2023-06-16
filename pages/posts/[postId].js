import Head from 'next/head'
import HeroMini from '../../src/components/Ui/HeroMini'
import NewsPage from '../../src/components/Ui/NewsPage'
import getPost from '../../lib/helper'
import fetcher from '../../lib/fetcher'
import Error from '../../src/components/spinner/Error'
import Spinner from '../../src/components/spinner/Spinner'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'



export default function Post(props) {
  const router = useRouter();
  const {postId} = router.query;
  const {data, isLoading, isError} = fetcher(`/api/posts/${postId}`);
    
  if(isLoading) return <Spinner/>
  if(isError) return <Error/>

  return (
      <div>
        <Head>
          <title>Post - Ogun State Scrabble Association</title>
          <meta name="description" content="Post,  OSSA is an Ogun State Scrabble Association Based In Nigeria"/>
          <meta name="keyword" content="Post"/>
        </Head>
       <HeroMini bannerText={`Headline`}/>
       
       <SWRConfig value={props.fallback}>
          <NewsPage {...data}/>
       </SWRConfig>

      
      </div>
  )
}


export async function getServerSideProps({ params }){
  const posts = await getPost(params.postId)

  return {
    props: {
      fallback: {
        'api/posts/' : posts
      },
      
    }
  }
}
