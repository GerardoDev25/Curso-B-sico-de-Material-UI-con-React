import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export const PaperInformation = ({ userState }) => {
  const { public_repos, followers, following } = userState;

  return (
    <>
      <Paper elevation={3}>
        <Stack>
          <Stack>
            <Typography>Repos</Typography>
            <Typography>{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography>Followers</Typography>
            <Typography>{followers}</Typography>
          </Stack>
          <Stack>
            <Typography>Following</Typography>
            <Typography>{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
