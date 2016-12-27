import { StepNewQuotationController } from './step-new-quotation.controller'

export let StepNewQuotationComponent = {
  restrict: 'E',
  bindings: {
    oneWayBinding: '<',
    onFunction: '&',
    string: '@'
  },
  templateUrl: 'app/quotation/step-new-quotation/step-new-quotation.html',
  controller: StepNewQuotationController
}
