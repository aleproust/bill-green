export class StepNewQuotationController {

  constructor(BillsService){
    'ngInject'
    this._BillsService = BillsService
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
  }

}
export default StepNewQuotationController
