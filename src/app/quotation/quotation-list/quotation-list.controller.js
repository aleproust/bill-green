export class QuotationListController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    this.billList = undefined
    this._BillsService.getQuotation()
      .then(bills => this.billList = bills)
  }

  newQuotation(){
    this._$state.go('^.new')

  }

  editQuotation(bill){
    this._$state.go('^.edit', {bill:bill})
  }

}
export default QuotationListController
