const Person = require('./person.js');

class Lehrer extends Person {
    constructor(name, gebOrt, gebDat, hauptfach) {
        super(name, gebOrt, gebDat);
        this.hauptfach = hauptfach;
    }
}

module.exports = Lehrer;