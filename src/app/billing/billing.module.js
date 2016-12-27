import { BillingComponent } from './billing.component'
import { StepNewBillComponent } from './step-new-bill/step-new-bill.component'
import { BillingListComponent } from './billing-list/billing-list.component'
import { StepEditBillComponent} from './step-edit-bill/step-edit-bill.component'
import { billingRoute } from './billing.route'

let BillingModule = angular.module('bill.billing', [])
  .component('billing', BillingComponent)
  .component('stepNewBill', StepNewBillComponent)
  .component('billingList', BillingListComponent)
  .component('stepEditBill', StepEditBillComponent)
  .config(billingRoute)

export default BillingModule
