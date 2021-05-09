import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, } from '@material-ui/core';

import '../style.css'

const SearchBar = () => {
  const history = useHistory();
  const navigate = (id) => history.push(`/${id}`);
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) navigate(search);
  }
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        align='right'
        className="container" >
        <TextField
          id="standard-basic"
          label="Search By ID"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              navigate(search);
            }
          }}
        />
        <label>
          <Link to={`/${search}`}>
            <Button
              style={{
                margin: '10px'
              }}
              variant="contained" color="primary">
              Search
          </Button>
          </Link>
        </label>
        <label>
          <Link to={`/`}>
            <Button
              variant="contained" color="primary">
              Main Page
          </Button>
          </Link>
        </label>
      </form >
    </div>
  );
}
export default SearchBar;