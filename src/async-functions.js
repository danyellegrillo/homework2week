function giveItBackLater(value, callback){
  function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 105)
}
function addSomePromises(somePromise){
  const p1 = new Promise( outputPromise('foo'), outputPromise('bar')) => {
    resolve('foofoo');
    reject('barbarbar')
  }
  return p1;
}

function promiseToGiveItBackLater(value, giveItBackLater){
  return new Promise(function (resolve, reject)

}






module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater}
