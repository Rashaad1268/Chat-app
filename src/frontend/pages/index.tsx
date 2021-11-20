import type { NextPage } from 'next';
import HeadTag from '../pages_/head';
import Ext from '../pages_/mainComponent';

const Home: NextPage = (): React.ReactElement<any, any> => {
  return (
    <div className='App'>
      <HeadTag />
      <Ext nav={true} layout={() => 
        <header className="App-header">
          <p>
            Home Page
          </p>
        </header>
      } />
    </div>
  )
}

export async function getServerSideProps(context: any) {
    if (context.req.cookies?.token) {
        return {
            redirect: {
                destination: '/@me',
                permanent: false
            }
        }
    } else {
        return {
            props: {}
        }
    }
}

export default Home;
