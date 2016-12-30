export class StepNewBillController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    if (this.bill) {
      this.editBill = angular.copy(this.bill.data)
      this.editBill.type = 'FACTURE'
      this.editBill.date = ''

    } else {
      this.editBill = {
        interventions: [],
        type: 'FACTURE',
        date: '',
        customerName: '',
        billTotalTTC: 0,
        billTotalHT: 0,
        isPaid: false,
        paidDate: '',
        paidMethod: ''
      }


    }
  }

  postBill(bill){
    this._BillsService.postBill(bill)
    .then(() => this._$state.go('root.billing.list'))

  }

}
export default StepNewBillController
