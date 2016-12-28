export class CityService {
  constructor($http){
    'ngInject'
    this._$http = $http
  }

  getCityNameByCP(cp){
    return this._$http.get(`https://vicopo.selfbuild.fr/cherche/${cp}`)
    .then(result => result.data.cities)
  }

  getStreetList(tempStreetName, postalCode) {
    return this._$http.get('https://api-adresse.data.gouv.fr/search', {params: {postcode: postalCode, q: tempStreetName, limit:5}})
      .then(response => response.data.features.filter(feature => feature.properties.type === 'housenumber'))

  }
}
