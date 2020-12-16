/**
 * Secret Santa Javascript
 * @param {[]} list Friend List
 */
function doSecretSanta(list) {  
    return [...list]
    .sort(() => Math.random() > .5 ? 1 : -1 )
    .map( (item, idx, arr) =>  [item, arr[ idx === arr.length-1 ? 0 : idx + 1 ]] )
}
  
module.exports.doSecretSanta = doSecretSanta

