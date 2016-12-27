import { QuotationComponent } from './quotation.component'
import { StepNewQuotationComponent } from './step-new-quotation/step-new-quotation.component'
import { StepEditQuotationComponent } from './step-edit-quotation/step-edit-quotation.component'
import { QuotationListComponent} from './quotation-list/quotation-list.component'
import { QuotationStorage } from './quotation.storage'
import { quotationRoute } from './quotation.route'

let QuotationModule = angular.module('bill.quotation', [])
  .component('quotation', QuotationComponent)
  .component('stepNewQuotation', StepNewQuotationComponent)
  .component('stepEditQuotation', StepEditQuotationComponent)
  .component('quotationList', QuotationListComponent)
  .service('QuotationStorage', QuotationStorage)
  .config(quotationRoute)

export default QuotationModule
