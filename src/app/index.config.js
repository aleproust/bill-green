export function config ($logProvider, $httpProvider, ErrorServiceProvider) {
  'ngInject'
  // Enable log
  $logProvider.debugEnabled(true)

  function isApiRequest (url) {
    return url.indexOf('/api/') !== -1
  }

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.interceptors.push(() => ( {
    request: function (config) {
      if (!config.timeout) config.timeout = 3000
      return config
    },
    response: function (response) {
      if(isApiRequest(response.config.url)){
        return response.data
      }
      else{
        return response
      }
    },
    responseError: function (rejection) {
      return ErrorServiceProvider.$get().buildError(rejection)
    }
  }
  ))
  $httpProvider.defaults.withCredentials = true;
}
