import { StepEditBillController } from './step-edit-bill.controller'

export let StepEditBillComponent = {
  restrict: 'E',
  bindings: {
    bill:'<'
  },
  templateUrl: 'app/billing/step-edit-bill/step-edit-bill.html',
  controller: StepEditBillController
}
