export class ChooserController {

  constructor(){
    'ngInject'
  }

  $onInit(){
    this.choice = this.choices[0]
  }

  choiceChange(choice){
    this.choice = choice
    this.selectChange({choice : choice})
  }

}
export default ChooserController
