import { Grid, CardMedia } from '@mui/material';
import React from 'react';
import { PricipalInformation } from '../../components/PricipalInformation';
import { Description } from '../Description';

export const UserCard = ({ userState }) => {
  const { avatar_url } = userState;

  return (
    // <h1>hollo everyone</h1>
    <Grid container>
      <Grid item xs={3}>
        <CardMedia component={'img'} image={avatar_url} alt={avatar_url} />
      </Grid>
      <Grid item xs={9}>
        <PricipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid>
  );
};
