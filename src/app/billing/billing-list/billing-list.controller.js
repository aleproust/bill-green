export class BillingListController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    this.selectedMonth = new Date();
    this.monthInvoice = 0;
    this.changeMonth(this.selectedMonth)
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
    this._BillsService.findBillsByMonth(month, 'FACTURE')
      .then(bills => {
        this.billList = bills
        this.monthInvoice = this._BillsService.calculateInvoice(bills)
      })
  }

//   findBillsByCustomer(customer){
//     this._BillsService.findBillByCustomer(customer, 'FACTURE').then(bills => this.billList = bills)
//   }
}
export default BillingListController
