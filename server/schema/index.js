const { gql } = require('apollo-server');

const typeDefs = gql`
  type VehicleStatus {
    last_updated: String
    ttl: String
    data: Data
  }

  type Data {
    bikes: [Bike]
  }

  type Bike {
    bike_id: ID!
    lat: Float
    lon: Float
    is_reserved: Boolean!
    is_disabled: Boolean!
    vehicle_type: String
  }

  type Query {
    vehicleStatus: VehicleStatus
    data: Data
    bikes: [Bike]
    bike(id: ID!) : Bike
  }

`;

module.exports = typeDefs;