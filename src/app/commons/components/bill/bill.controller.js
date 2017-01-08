export class BillController {

  constructor(CityService) {
    'ngInject'
    this._CityService = CityService
  }

  $onInit() {
    this.availableCities = []
    this.tvaChoices = ['10', '20']
    this.billTypes = ['Intervention', 'Fourniture végétaux', 'CE 1er semestre', 'CE 2ème semestre', 'CE échéance 1er trimestre', 'CE échéance 2ème trimestre', 'CE échéance 3ème trimestre', 'CE échéance 4ème trimestre', 'CE annuel']
    if(this.bill && this.bill.customerCity){
      this.availableCities[0] = this.bill.customerCity
    }

    this.newIntervention()

  }

  newIntervention() {
    this.intervention = {
      libelle: '',
      priceHT: '',
      tva: ''
    }
  }

  postIntervention(intervention) {
    let {libelle, priceHT, tva} = intervention
    let priceTTC = parseFloat((((tva / 100) + 1) * priceHT).toFixed(2))
    this.bill.interventions.push({
      libelle,
      priceHT,
      tva,
      priceTTC
    })
    this.bill.billTotalHT += priceHT
    this.bill.billTotalTTC += priceTTC
    this.newIntervention()

  }

  editIntervention(intervention){
    let {libelle, priceHT, priceTTC, tva} = intervention
    this.intervention = {
      libelle,
      priceHT,
      tva,
      priceTTC
    }
    this.removeIntervention(intervention)
  }

  removeIntervention(intervention){
    let removeIndex = this.bill.interventions.indexOf(intervention)
    this.bill.interventions.splice(removeIndex, 1)
    this.bill.billTotalHT -= intervention.priceHT
    this.bill.billTotalTTC -= intervention.priceTTC
  }

  $onChanges() {}

  saveBill(bill) {
    this.onSave({
      bill
    })
  }


  getStreetList(tempStreetName, postalCode) {
    return this._CityService.getStreetList(tempStreetName, postalCode);
  }

  onPostalCodeUpdate(postalCode) {
    if (postalCode) {
      this.availableCities = [];
      this.availableCitiesLoading = true;
      return this._CityService.getCityNameByCP(postalCode)
        .then(listeVille => {
          this.availableCitiesError = false;
          this.availableCitiesLoading = false;
          this.availableCities = listeVille;
          if (this.availableCities.length === 1) {
            this.bill.customerCity = this.availableCities[0];
          }
        })
        .catch(() => {
          this.bill.customerCity = null;
          this.availableCitiesLoading = false;
          this.availableCities = [];
        })
    }
  }
}
export default BillController
