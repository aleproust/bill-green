export class StepNewBillController {

  constructor(BillsService) {
    'ngInject'
    this._BillsService = BillsService
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

  }

}
export default StepNewBillController
