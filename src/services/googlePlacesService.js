class GooglePlacesService {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.autocompleteURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
      this.detailsURL = 'https://maps.googleapis.com/maps/api/place/details/json';
    }
  
    async fetchPlaces(query) {
      const response = await fetch(`${this.autocompleteURL}?input=${query}&key=${this.apiKey}`);
      const data = await response.json();
  
      if (data.status === 'OK') {
        return data.predictions;
      } else {
        throw new Error('Error fetching places');
      }
    }
  
    async fetchPlaceDetails(placeId) {
      const response = await fetch(`${this.detailsURL}?placeid=${placeId}&key=${this.apiKey}`);
      const data = await response.json();
  
      if (data.status === 'OK') {
        return data.result;
      } else {
        throw new Error('Error fetching place details');
      }
    }
  }
  
  const apiKey = 'AIzaSyBrPz_5sY6T6iO-Is-GwHyMMGjjnT85YZ8'; // Replace with API key
  const googlePlacesService = new GooglePlacesService(apiKey);
  
  export default googlePlacesService;