const {doSecretSanta} = require('./doSecretSanta')

const friends = ['joão', 'Maria', 'José', 'Carlos', 'Ana', 'Julia', 'Denis']


console.table (
    doSecretSanta( friends )
)