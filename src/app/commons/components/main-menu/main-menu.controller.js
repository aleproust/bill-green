export class MainMenuController {

  constructor($state){
    'ngInject'
    this._$state = $state
  }

  $onInit(){

  }
  toBilling(){
    this._$state.go('root.billing.list')
  }

  toQuotation(){
    this._$state.go('root.quotation.list')
  }
}
export default MainMenuController
