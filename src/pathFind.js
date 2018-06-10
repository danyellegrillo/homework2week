
function pathFind(path, object) {
  if (object.hasOwnProperty(path[0])){
     return pathFind(path.slice(1), object[path[0]])
  }
  else return object.path.length
}

module.exports = { pathFind }
// const obj = {
//   foo: "Hey"
// }
// assert.strictEqual(
//   pathFind(["foo"], obj),
//   "Hey",
//   "should return the foo property"
// //
