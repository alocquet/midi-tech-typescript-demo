import * as request from 'request';
import { Sirene } from './model';

var r = request.defaults({ 'proxy': 'http://webdefence.global.blackspider.com' })

// http://json2ts.com/

function sirene2string(sirene: Sirene): string {
    return sirene.fields.l1_normalisee + (sirene.fields.l2_normalisee ? ' - ' + sirene.fields.l2_normalisee : '');
}

r.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=sirene%40public&q=gfi&facet=categorie&facet=proden&facet=libapen&facet=siege&facet=libreg_new&facet=saisonat&facet=libtefen&facet=depet&facet=libnj&facet=libtca&facet=liborigine',
    (error, response, body) => {
        let result = JSON.parse(body);
        // console.log(result);
        // console.log(result.records)
        // console.log((result.records as Sirene[]));
        console.log((result.records as Sirene[]).map(sirene2string));
    });

interface Film {
    // # readonly
    readonly name: string;
    // # optional fields
    /*noirBlanc: boolean;*/
    noirBlanc?: boolean;
}
let redIsDead: Film = { name: 'Red is Dead' };
// redIsDead.name = "red is dead";

// # Function Types
interface FilterFunction {
    (element: number): boolean;
}
function filterCollection(collection: Array<number>, filterFunction: FilterFunction) {
    return collection.filter(filterFunction);
}
console.log(filterCollection([1, 2, 3, 4, 5], elt => elt < 3));


// # Indexed types
interface CustomArray {
    [index: number]: string;
}
let customArray: CustomArray = ["test"];

