import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Searcher } from './components/Searcher';
import { UserCard } from './containers/UserCard';
import { getUser } from './services/users';

export const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const loadUser = async (user) => {
    const userResponse = await getUser(user);

    if (userState === 'Octocat') {
      localStorage.setItem('octocat', JSON.stringify(userResponse));
    }

    if (userResponse.message === 'Not Found') {
      const octocat = localStorage.getItem('octocat');
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }

    console.log(userResponse);
  };

  useEffect(() => {
    loadUser(inputUser);
    console.log('hola');
  }, [inputUser]);

  return (
    <Container
      sx={{
        backgroundColor: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState}/>
      {/* <h1>hollo everyone</h1> */}
    </Container >
  );
};
