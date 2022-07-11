import React from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import {useState} from 'react';

const Header = () => {
  const {getUser} = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }
  return (
     <header>
        <S.Wrapper>
            <input type="text" placeholder="Enter username on github to search" onChange={(event)=> setusernameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}><span>Search</span></button>
        </S.Wrapper>

    </header>
    
  );
};

export default Header;
