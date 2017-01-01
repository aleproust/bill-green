import { BillListController } from './bill-list.controller'

export let BillListComponent = {
  restrict: 'E',
  bindings: {
    billList :'<',
    edit:'&',
    print:'&',
    findByCustomer:'&'
  },
  templateUrl: 'app/commons/components/bill-list/bill-list.html',
  controller: BillListController
}
