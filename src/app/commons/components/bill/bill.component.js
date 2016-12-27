import { BillController } from './bill.controller'

export let BillComponent = {
  restrict: 'E',
  bindings: {
    mode:'<',
    onSave:'&',
    bill:'<'
  },
  templateUrl: 'app/commons/components/bill/bill.html',
  controller: BillController
}
