import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    constructor() {}

    get authApiURI() {
        return 'http://localhost:7000/api';
    }

    get resourceApiURI() {
        return 'http://localhost:7070/api';
    }
}
