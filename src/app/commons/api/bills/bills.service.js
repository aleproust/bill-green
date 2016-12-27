export class BillsService {
  constructor($http, CONFIG){
    'ngInject'
    this._$http = $http
    this._CONFIG = CONFIG
  }

  getBill(number){
    return this._$http.get(`${this._CONFIG.URL_API}/bills/${number}`)

  }

  getBills(){
    return this._$http.get(`${this._CONFIG.URL_API}/bills?type=FACTURE`)
  }

  getQuotation(){
    return this._$http.get(`${this._CONFIG.URL_API}/bills?type=DEVIS`)
  }

  putBill(bill){
    return this._$http.put(`${this._CONFIG.URL_API}/bills/${bill.number}`, bill)
  }

  postBill(bill){
    bill.formattedDate = moment(bill.date).format('(DD/MM/YYYY')
    bill.number = this.generateBillNumber()
    return this._$http.post(`${this._CONFIG.URL_API}/bills/${bill.number}`, bill)
    .then(({number}) =>  number === bill.number)
  }

  generateBillNumber(){
    return parseInt(Math.random() * (9999 - 1) + 1);
  }

  getBillDoc(billNumber){
    return this._$http.get(`${this._CONFIG.URL_API}/files/${billNumber}`)
  }
}
