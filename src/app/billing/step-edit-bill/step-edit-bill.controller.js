export class StepEditBillController {

  constructor($state, BillsService){
    'ngInject'
    this._$state = $state
    this._BillsService = BillsService
  }

  $onInit(){
    if (!this.bill) {
      this._$state.go('^.list')
    } else {
      this.bill.data.date = new Date(this.bill.data.date)
      this.editBill = this.bill.data
    }
  }

  put(bill){
    this._BillsService.putBill(bill)
    .then(() => this._$state.go('^.list'))

  }

}
export default StepEditBillController
