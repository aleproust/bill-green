export function billingRoute($stateProvider) {
  'ngInject'
  $stateProvider.state('root.billing', {
    url: '/billing',
    abstract: true,
    template: '<billing></billing>'
  })
    .state('root.billing.new', {
      url: '/new',
      data: {
        pageTitle: 'Bill - Billing - New'
      },
      resolve: {
        bill: function($stateParams) {
          return $stateParams.bill
        }
      },
      params: {
        bill: null
      },
      template: `<step-new-bill bill="$resolve.bill"></step-new-bill>`

    })
    .state('root.billing.list', {
      url: '/list',
      data: {
        pageTitle: 'Bill - Billing - List'
      },
      template: `<billing-list></billing-list>`

    })
    .state('root.billing.edit', {
      url: '/edit',
      data: {
        pageTitle: 'Bill - Billing - Edit'
      },
      params:{
        bill:null
      },
      resolve: {
        bill: function($stateParams) {
          return $stateParams.bill
        }
      },
      template: `<step-edit-bill bill="$resolve.bill"></step-edit-bill>`
    })
}
