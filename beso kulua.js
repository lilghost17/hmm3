// დავალება 1 

function hm1(...pars) {
    if (pars.length <= 2) {
        return "par 2 ze naklebia!";
    }
    const sum = pars[0] + pars[1];
    let act = 1;

    for (let i = 2; i < pars.length; i++) {
        act *= pars[i];
    }
    return [sum, act];
}
const result = hm1 (1,1,2,3,5,8,13);
console.log(result);

// დავალება 2

function findCity(user) {
    const { banks: [, , { address: { city } = {} } = {}] = [] } = user ;
    return city;
}
const user = {banks: [{},{},{address: {city:"poti"}}]};
const city = findCity(user);
console.log(city);


// დავალება 3
const person = {
    name: "geno",
    address: {
        poti: {
        district:{
            street: "gamsakhurdias"
        }
      }
    },
    friends: [
        {closeFriend: {name: "tabagari"}},
        {closeFriend: {name: "qatamadze"}}
    ]
};

const deepCopy = (obj) => {
    const result = {}

    for(const fieldname in obj){
        if(typeof obj[fieldname] === 'objectt'){

        }else{
            result[fieldname] = obj[fieldname]

        }
    }
    return result 
}

const person2 = deepCopy(person)
console.log(person)
console.log(person2)
