const Mitarbeiter = require('./mitarbeiter.js');

class Azubi extends Mitarbeiter {
    constructor(name, gebOrt, gebDat, personalNummer, fuehrungskraft, gehalt, lehrjahr) {
        super(name, gebOrt, gebDat, personalNummer, fuehrungskraft, gehalt);
        this.lehrjahr = lehrjahr;
    }
}

module.exports = Azubi;