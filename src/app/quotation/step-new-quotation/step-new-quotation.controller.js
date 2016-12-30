export class StepNewQuotationController {

  constructor(BillsService, $state){
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit(){
    this.quotation = {
      interventions:[],
      type: 'DEVIS',
      date:'',
      customerName:'',
      billTotalTTC : 0,
      billTotalHT : 0,
      paid:false,
      paidDate:'',
      paidMethod:''
    }


  }

  postBill(bill){
    this._BillsService.postBill(bill)
    .then(() => this._$state.go('root.quotation.list'))
  }

}
export default StepNewQuotationController
