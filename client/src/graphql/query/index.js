import { gql } from '@apollo/client';
export const getVehicleStatus = gql`
 query getVehicleStatus {
  vehicleStatus {
      last_updated
      ttl
      data {
        bikes {
          bike_id
          lat
          lon
          is_reserved
          is_disabled
          vehicle_type
        }
      }
    }
  }
`;

export const getBikes = gql`
  query GetBikes {
    bikes {
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }
  }
  `;

export const getBikeById = gql`
  query GetBikeById ($id: ID!) {
    bike (id: $id){
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }
  }
`;