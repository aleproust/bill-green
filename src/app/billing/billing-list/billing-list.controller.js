export class BillingListController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    this.selectedMonth = new Date();
    this._BillsService.findBillsByMonth(this.selectedMonth, 'FACTURE')
      .then(bills => this.billList = bills)
  }

  newBill() {
    this._$state.go('^.new')
  }

  editBill(bill) {
    this._$state.go('^.edit', {
      bill
    })
  }

  changeMonth(month){
    this._BillsService.findBillsByMonth(month)
      .then(bills => this.billList = bills)
  }
}
export default BillingListController
