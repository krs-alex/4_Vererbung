const Person = require('./person.js');

class Schueler extends Person {
    constructor(name, gebOrt, gebDat, bildungsabschluss, notendurchschnitt) {
        super(name, gebOrt, gebDat);
        this.bildungsabschluss = bildungsabschluss;
        this.notendurchschnitt = notendurchschnitt;
    }
}

module.exports = Schueler;