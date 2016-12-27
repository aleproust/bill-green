export class BillController {

  constructor(){
    'ngInject'
  }

  $onInit(){
    this.tvaChoices = [10, 20]

    // this.bill =this.bill || {
    //   interventions:[],
    //   type: this.mode ==='quotation' ? 'DEVIS':'FACTURE',
    //   date:'',
    //   customerName:'',
    //   billTotalTTC : 0,
    //   billTotalHT : 0,
    //   paid:false,
    //   paidDate:'',
    //   paidMethod:''
    // }

    this.newIntervention()

  }

  newIntervention(){
    this.intervention = {
      libelle:'',
      priceHT:'',
      tva:''
    }
  }

  postIntervention(intervention){
    let {libelle, priceHT, tva} = intervention
    let priceTTC = parseFloat((((tva/100)+1) * priceHT).toFixed(2))
    this.bill.interventions.push({
      libelle, priceHT, tva, priceTTC
    })
    this.bill.billTotalHT += priceHT
    this.bill.billTotalTTC += priceTTC
    this.newIntervention()

  }

  $onChanges(){

  }

  saveBill(bill){
    this.onSave({bill})
  }

}
export default BillController
