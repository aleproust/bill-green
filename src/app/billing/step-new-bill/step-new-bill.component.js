import { StepNewBillController } from './step-new-bill.controller'

export let StepNewBillComponent = {
  restrict: 'E',
  bindings: {
    bill:'<'
  },
  templateUrl: 'app/billing/step-new-bill/step-new-bill.html',
  controller: StepNewBillController
}
