import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';

import Table from './../components/Table';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader'
import { getBikeById } from '../graphql/query/index'

import '../style.css'

export default function Bike(props) {
  const id = props.match.params.id;
  const { data: { bike = {} } = {}, loading, error } = useQuery(getBikeById, { variables: { id } });

  if (loading) return <Loader />;
  if (error) return <div>An error occurred</div>;

  if (!bike) return (
    <div className="details">
      <p className="main">No Record Found</p>
      <Link to={`/`}>
        <Button
          variant="contained" color="primary">
          Main Page
          </Button>
      </Link>
    </div>
  );

  return (
    <div className='container'>
      <SearchBar />
      <Table bikes={[bike]} />
    </div>
  );
}
