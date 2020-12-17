/**
 * Secret Santa Javascript
 * @param {[]} list Friend List
 */
function doSecretSanta(list) {  
    return [...list]
    .sort(() => Math.random() > .5 ? 1 : -1 )
    .map( (item, idx, arr) =>  [item, arr[ idx === arr.length-1 ? 0 : idx + 1 ]] )
}

function* doSecretSantaYield([...list]) {
    list.sort( _ => Math.random() > .5 ? 1 : -1 )
    let first = list[0]
    while(list.length)
    yield [list.shift(), list[0] || first ]
  }
  
//   console.table( [...doSecretSanta(friends)] )


module.exports.doSecretSanta = doSecretSanta
module.exports.doSecretSantaYield = doSecretSantaYield

