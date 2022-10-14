import { Container } from '@mui/material';
import { Searcher } from './Searcher';

export const App = () => {
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
      <Searcher />
    </Container>
  );
};
