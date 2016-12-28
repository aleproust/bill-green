export class QuotationListController {

  constructor(BillsService, FileSaver, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._FileSaver = FileSaver
    this._$state = $state
  }

  $onInit() {
    this.billList = undefined
    this._BillsService.getQuotation()
      .then(bills => this.billList = bills)
  }

  newQuotation() {
    this._$state.go('^.new')

  }

  print(bill) {
    return this._BillsService.getBillDoc(bill.number)
  }

  editQuotation(bill) {
    this._$state.go('^.edit', {
      bill: bill
    })
  }

}
export default QuotationListController
