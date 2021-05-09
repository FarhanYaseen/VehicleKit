module.exports = {
  Query: {
    bikes: async (_, __, { dataSources }) => {
      return dataSources.bikeAPI.getBikes();
 
    },
    bike: async (_, { id }, { dataSources }) => {
      return dataSources.bikeAPI.getBikeById(id);

    },
    vehicleStatus: async (_, __, { dataSources }) =>{
      return dataSources.bikeAPI.getVehicleStatus();
    },
  }
};