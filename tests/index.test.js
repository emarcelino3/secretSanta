const assert = require('assert').strict;
const {doSecretSanta} = require('../doSecretSanta')
const {doSecretSantaYield} = require('../doSecretSanta')

describe('Unit Tests - doSecretSanta',()=>{
    it('List contem items', ()=>{        
        const friends = ['joão', 'Maria', 'José', 'Carlos', 'Ana', 'Julia', 'Denis']
        assert.notStrictEqual(doSecretSanta(friends).length, 6)        
    })
    it('Shuffle array', ()=>{        
        const friends = ['joão', 'Maria', 'José', 'Carlos', 'Ana', 'Julia', 'Denis']
        const arr = doSecretSanta(friends).map(item=> item[0]  )
        assert.notDeepStrictEqual(arr, friends)              
    })
})

describe('Unit Tests - doSecretSantaYield',()=>{
    it('List contem items', ()=>{        
        const friends = ['joão', 'Maria', 'José', 'Carlos', 'Ana', 'Julia', 'Denis']
        assert.notStrictEqual([...doSecretSantaYield(friends)].length, 6)        
    })
    it('Shuffle array', ()=>{        
        const friends = ['joão', 'Maria', 'José', 'Carlos', 'Ana', 'Julia', 'Denis']
        const arr = [...doSecretSantaYield(friends)].map(item=> item[0]  )
        assert.notDeepStrictEqual(arr, friends)              
    })
})
