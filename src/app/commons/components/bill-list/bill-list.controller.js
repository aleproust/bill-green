export class BillListController {

  constructor(){
    'ngInject'
  }

  $onInit(){

  }

  find(){
    this.findByCustomer({customer:this.customerFind})
  }

}
export default BillListController
