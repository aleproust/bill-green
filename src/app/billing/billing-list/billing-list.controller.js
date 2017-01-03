export class BillingListController {

  constructor(BillsService, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._$state = $state
  }

  $onInit() {
    this.selectedMonth = new Date();
    this.monthInvoice = 0;
    this.searchCriterias = [{
      label: 'Date',
      value: 'date'
    }, {
      label: 'Nom',
      value: 'customerName'
    }]
    this.searchCriteria = this.searchCriterias[0];
    this.customerFind;
    this.searchCriteriaChange(this.searchCriteria)
  }

  newBill() {
    this._$state.go('^.new')
  }

  editBill(bill) {
    this._$state.go('^.edit', {
      bill
    })
  }

  searchCriteriaChange(choice) {
    this.searchCriteria = choice;
    if (choice.value === 'date') {
      this.changeMonth(this.selectedMonth)
    } else if (choice.value === 'customerName') {
      this.findByCustomer(this.customerFind)
    }
  }

  changeMonth(month) {
    this._BillsService.findBillsByMonth(month, 'FACTURE')
      .then(bills => {
        this.billList = bills
        this.monthInvoice = this._BillsService.calculateInvoice(bills)
      })
  }

  findByCustomer(customer) {
    if (customer) {
      this._BillsService.findBillByCustomer(customer, 'FACTURE').then(bills => {
        this.billList = bills
        this.monthInvoice = this._BillsService.calculateInvoice(bills)
      })

    } else {
      this.billList = []
      this.monthInvoice = 0.00;
    }
  }
}
export default BillingListController
