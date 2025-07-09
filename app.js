let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['com', 'net', 'us', 'io', 'es']

for(let pr of pronoun){
    for(let ad of adj){
        for(let no of noun){
            for(let ex of ext){
                console.log(`${pr}${ad}${no}.${ex}`)
            }
        }
    }
}