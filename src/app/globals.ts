import {Injectable} from "@angular/core";

@Injectable()
export class Globals {
    private selectedLanguage = 'balkan';
    
    constructor() {}

    setLanguage(lang) {
        this.selectedLanguage = lang;
    }

    getLanguage() {
        return this.selectedLanguage;
    }
}