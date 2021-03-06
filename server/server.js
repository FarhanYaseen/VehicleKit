const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const BikeAPI = require('./datasources/vehicle');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bikeAPI: new BikeAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
