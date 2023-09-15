const Lehrer = require('./lehrer.js');
const Mitarbeiter = require('./mitarbeiter.js');
const Schueler = require('./schueler.js');
const Azubi = require('./azubi.js');

class Main {
    static main() {
        const lehrer = new Lehrer('Max Mustermann', 'Kempten', '01.11.1990', 'Mathematik');
        const mitarbeiter = new Mitarbeiter('Anna Schmidt', 'Kempten', '15.08.1972', 16005, true, 3200.50);
        const schueler = new Schueler('Lisa Müller', 'München', '28.01.2000', 'Abitur', 2.2);
        const azubi = new Azubi('Tom Schmidt', 'Ulm', '17.06.1999', 80032, false, 1082.00, 'Elektroniker', 3);

        console.log(lehrer);
        console.log(mitarbeiter);
        console.log(schueler);
        console.log(azubi);
    }
}

Main.main();