/* global moment:false */

import './polyfill/polyfill.loader';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Modules
import './commons/commons.module';
import './subscription/subscription.module';
import './quotation/quotation.module';
import './billing/billing.module';

// Routes
angular.module('bill',
  [
    'ngtweet',
    'ui.router',
    'bill.subscription',
    'bill.quotation',
    'bill.commons',
    'bill.billing'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
