// Constants
import { ErrorConstants } from './constants/error.constants'
import { ConfigConstants } from './constants/config.constants'

// Commons Pages
import { DemoComponent } from './pages/demo/demo.component'
import { ErrorComponent } from './pages/error/error.component'

// Commons Components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { CreditCardComponent } from './components/credit-card/credit-card.component'
import { HeaderLightComponent } from './components/header-light/header-light.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { OffersComponent } from './components/offers/offers.component'
import { BillComponent} from './components/bill/bill.component'
import { BillListComponent} from './components/bill-list/bill-list.component'
import { MainMenuComponent} from './components/main-menu/main-menu.component'
// Commons Services
import { ErrorService } from './services/error/error.service'
import { CityService } from './services/city/city.service'
// Commons Api Services
import { BillsService } from './api/bills/bills.service'
// Commons Filters
import {TTCPriceFilter} from './filters/ttc-price.filter';
// Routes
import { commonsRoute } from './commons.route'

let CommonsModule = angular.module('bill.commons', [])

  // Constantes
  .constant('ERROR', ErrorConstants)
  .constant('CONFIG', ConfigConstants)

  // Services communs
  .service('ErrorService', ErrorService)
  .service('CityService', CityService)
  .service('BillsService', BillsService)
  //Filters
  .filter('TTCPrice', TTCPriceFilter)
  // Pages communes
  .component('demo', DemoComponent)
  .component('error', ErrorComponent)

  // Components communs
  .component('headerLight', HeaderLightComponent)
  .component('navbar', NavbarComponent)
  .component('breadcrumb', BreadcrumbComponent)
  .component('creditCard', CreditCardComponent)
  .component('offers', OffersComponent)
  .component('bill', BillComponent)
  .component('billList', BillListComponent)
  .component('mainMenu', MainMenuComponent)

  .value('EventEmitter', payload => ({ $event: payload }))

  // Routes
  .config(commonsRoute)

export default CommonsModule
