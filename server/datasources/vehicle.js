const { RESTDataSource } = require('apollo-datasource-rest');

const PATH = 'https://api.helbiz.com/admin/reporting/arlington/gbfs/';
const FILE_PATH = 'free_bike_status.json';
class BikeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = PATH;
  }
  async getVehicleStatus() {
    const response = await this.get(FILE_PATH);
    return response;
  }
  
  async getBikes() {
    const response = await this.get(FILE_PATH);
    const { data: { bikes = [] } = {} } = response
    return bikes;
  }

  async getBikeById( id ) {
    const response = await this.get(FILE_PATH);
    const { data: { bikes = [] } = {} } = response
    return bikes.find(b => b.bike_id === id);
  }
}

module.exports = BikeAPI;