export let TTCPriceFilter = function() {
  return function(priceHt, tva){
    if(!priceHt && !tva){
      return 0;
    }
    return ((tva/100)+1) * priceHt
  }
}
