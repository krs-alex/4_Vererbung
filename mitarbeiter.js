const Person = require('./person.js');

class Mitarbeiter extends Person {
    constructor(name, gebOrt, gebDat, personalNummer, fuehrungskraft, gehalt) {
        super(name, gebOrt, gebDat);
        this.personalNummer = personalNummer;
        this.fuehrungskraft = fuehrungskraft;
        this.gehalt = gehalt;
    }
}

module.exports = Mitarbeiter;