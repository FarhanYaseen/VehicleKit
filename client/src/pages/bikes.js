import React from 'react';
import { useQuery } from '@apollo/client';
import { getVehicleStatus } from '../graphql/query/index'
import Table from './../components/Table';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader'

import '../style.css'

export default function Bikes() {
  const { data, loading, error } = useQuery(getVehicleStatus);
 
  if (loading) return <Loader />;
  if (error) return <div>An error occurred</div>;

  const { vehicleStatus : { data : { bikes }} } = data;
  if (!bikes) return <div>No Record Found</div>;
  return (
    <div className='container'>
      <SearchBar />
      <Table bikes={bikes} />
    </div>
  );
}
