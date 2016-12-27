export class BillingListController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    this._BillsService.getBills().then(bills => this.billList = bills)
  }

  newBill() {
    this._$state.go('^.new')
  }

  editBill(bill) {
    this._$state.go('^.edit', {
      bill
    })
  }

}
export default BillingListController
