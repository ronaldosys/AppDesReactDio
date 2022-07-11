import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
    
    const {githubState} = useGithub();

        
    return (
        <S.Wrapper>
            <S.WrapperImage
                src={githubState.user.avatar_url}
                alt="Avatar do Usuario"
               
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username:</h3>
                        <a 
                        href={githubState.user.html_url} 
                        target="_blank"
                        rel="noreferrer"
                        >{githubState.user.login}</a>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company: </h3>
                        <span>{githubState.user.company}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location: </h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog: </h3>
                        <a 
                        href={githubState.user.blog} 
                        target="_blank"
                        rel="noreferrer"
                        >{githubState.user.blog}</a>
                       
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>

                    <div>
                        <h4>Followers</h4>
                        <spam>{githubState.user.followers} </spam>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <spam>{githubState.user.following}</spam>
                    </div>                    
                    <div>
                        <h4>Gists</h4>
                        <spam>{githubState.user.public_gists}</spam>
                    </div>                    
                    <div>
                        <h4>Repos</h4>
                        <spam>{githubState.user.public_repos}</spam>
                    </div>

                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;
