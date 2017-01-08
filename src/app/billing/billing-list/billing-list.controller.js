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

  print(bill) {
    return this._BillsService.getBillDoc(bill.number).then(data => {
      let blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
      let objectUrl = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = objectUrl;
      a.download = `Facture_${bill.data.customerName}_${bill.data.formattedDate}_.docx`;
      a.target = '_blank';
      a.click();
    })
  }

  downloadXLSX(){
    return this._BillsService.exportBillList(this.billList).then(data => {
      let blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      let objectUrl = URL.createObjectURL(blob);
      let month = moment(this.selectedMonth).format('MM-YYYY')
      let a = document.createElement('a');
      a.href = objectUrl;
      a.download = `Facture_${month}.xlsx`;
      a.target = '_blank';
      a.click();
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
