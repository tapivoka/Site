export function groupBy(xs, keyGetter) {
  return xs.reduce(function(rv, x) {
    (rv[keyGetter(x)] = rv[keyGetter(x)] || []).push(x)
    return rv
  }, {})
}

