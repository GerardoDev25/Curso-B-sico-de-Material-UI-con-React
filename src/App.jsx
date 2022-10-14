import { Container } from '@mui/material';
import { useState } from 'react';
import { Searcher } from './Searcher';

export const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState('inputUser');

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
    </Container>
  );
};
