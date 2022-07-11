import React from 'react';
import Layout from '../src/components/layout/index'
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';
import useGithub from '../src/hooks/github-hooks';
import NoSearch from './components/no-search';
import Footer from './components/footer';


const App = () => {

  const {githubState} = useGithub();
  return (
                
       <Layout>
        {githubState.hasUser ? <>
          {githubState.loading ? ( 
            <p>Loaging...</p>
              ) : (
            <>
              <Profile/>
              <Repositories/>
              <Footer/>
            </> 
          )}
        </> : <NoSearch/>}

        
       </Layout>
       
    
  );
}

export default App;
