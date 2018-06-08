function giveItBackLater(value, callback){
  function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 100)
}
}






module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater}
