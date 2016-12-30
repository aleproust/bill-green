export class QuotationListController {

  constructor(BillsService, FileSaver, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._FileSaver = FileSaver
    this._$state = $state
  }

  $onInit() {
    this.selectedMonth = new Date();
    this.billList = undefined
    this._BillsService.findBillsByMonth(this.selectedMonth, 'DEVIS')
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

  changeMonth(month){
    this._BillsService.findBillsByMonth(month, 'DEVIS')
      .then(bills => this.billList = bills)
  }
}
export default QuotationListController
