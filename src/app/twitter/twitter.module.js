import { TwitterComponent } from './twitter.component'

import { twitterRoute } from './twitter.route'

let TwitterModule = angular.module('bill.twitter', [])

  .component('twitter', TwitterComponent)

  // Routes
  .config(twitterRoute)

export default TwitterModule
