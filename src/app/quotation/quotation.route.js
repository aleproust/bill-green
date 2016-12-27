export function quotationRoute ($stateProvider) {
  'ngInject'
  $stateProvider.state('root.quotation', {
    url: '/quotation',
    abstract: true,
    template: '<quotation></quotation>'
  })
  .state('root.quotation.list', {
    url: '/list',
    data: { pageTitle: 'Bill - Quotation - Liste' },
    template: '<quotation-list></quotation-list>'
  })
  .state('root.quotation.new', {
    url: '/new',
    data: { pageTitle: 'Bill - Quotation - New' },
    template: '<step-new-quotation></step-new-quotation>'
  })
  .state('root.quotation.edit', {
    url: '/edit',
    data: { pageTitle: 'Bill - Quotation - Edit' },
    params: {
      bill: null
    },
    template: '<step-edit-quotation></step-edit-quotation>'
  })
}
