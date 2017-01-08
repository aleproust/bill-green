export class QuotationListController {

  constructor(BillsService, FileSaver, $state) {
    'ngInject'
    this._BillsService = BillsService
    this._FileSaver = FileSaver
    this._$state = $state
  }

  $onInit() {
    this.selectedMonth = new Date();
    this.billList = undefined
    this.searchCriterias = [{
      label: 'Date',
      value: 'date'
    }, {
      label: 'Nom',
      value: 'customerName'
    }]
    this.searchCriteria = this.searchCriterias[0];
    this.searchCriteriaChange(this.searchCriteria)
  }

  newQuotation() {
    this._$state.go('^.new')

  }

  searchCriteriaChange(choice) {
    this.searchCriteria = choice;
    if (choice.value === 'date') {
      this.changeMonth(this.selectedMonth)
    } else if (choice.value === 'customerName') {
      this.findByCustomer(this.customerFind)
    }
  }

  print(bill) {
    return this._BillsService.getBillDoc(bill.number).then(data => {
      let blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
      let objectUrl = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = objectUrl;
      a.download = `Devis_${bill.data.customerName}_${bill.data.formattedDate}_.docx`;
      a.target = '_blank';
      a.click();
    })
  }

  editQuotation(bill) {
    this._$state.go('^.edit', {
      bill: bill
    })
  }

  changeMonth(month) {
    this._BillsService.findBillsByMonth(month, 'DEVIS')
      .then(bills => this.billList = bills)
  }


  findByCustomer(customer) {
    if (customer) {
      this._BillsService.findBillByCustomer(customer, 'DEVIS').then(bills => this.billList = bills)

    } else {
      this.billList = []
    }

  }
}
export default QuotationListController
