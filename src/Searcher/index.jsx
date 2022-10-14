import React from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const Searcher = () => {
  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%',
      }}
    >
      <TextField
        id='outlined-basic'
        label='Github User'
        placeholder='Octocat'
        variant='outlined'
        size='small'
        sx={{
          width: '90%',
        }}
      />
      <IconButton
      size='small'
        sx={{
          left: '-45px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
