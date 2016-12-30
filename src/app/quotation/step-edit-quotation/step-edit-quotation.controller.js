export class StepEditQuotationController {

  constructor(BillsService, $stateParams, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$stateParams = $stateParams
    this._$state = $state
  }

  $onInit() {


    if (!this._$stateParams.bill) {
      this._$state.go('^.list')
    } else {
      this.bill = this._$stateParams.bill
      this.bill.data.date = new Date(this.bill.data.date)
      this.editBill = this.bill.data
    }
  }

  put(bill) {
    this.bill.data = bill
    this._BillsService.putBill(bill)
      .then(() => {
        console.log('Bill bien maj')
        this._$state.go('^.list')
      })
  }

  toBilling() {
    this._$state.go('root.billing.new', {
      bill: this.bill
    })
  }



}
export default StepEditQuotationController
