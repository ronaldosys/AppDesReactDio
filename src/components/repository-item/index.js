import React from 'react';
import * as S from './styled'

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return(
  <S.Wrapper>
    <S.WrapperTitle><u>Repository Name: </u> {name}</S.WrapperTitle>
    <S.WrapperFullName>Full Name: {fullName}</S.WrapperFullName>
    Link: <S.WrapperLink
      href={linkToRepo}
      target="_blank"
      rel="noreferrer"
    >{fullName}</S.WrapperLink>
  </S.Wrapper>
  )
};

export default RepositoryItem;
