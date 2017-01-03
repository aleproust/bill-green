
import { ChooserController } from './chooser.controller'

export let ChooserComponent = {
  restrict: 'E',
  bindings: {
    choices:'<',
    selectChange:'&'
  },
  templateUrl: 'app/commons/components/chooser/chooser.html',
  controller: ChooserController
}
