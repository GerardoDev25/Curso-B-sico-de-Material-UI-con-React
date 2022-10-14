import React, { useState } from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUser(valueInput);
  };

  const handleChange = ({ target }) => {
    setValueInput(target.value);
  };

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
        value={valueInput}
        onChange={handleChange}
        size='small'
        sx={{
          width: '90%',
        }}
      />
      <IconButton
        onClick={handleSubmit}
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
