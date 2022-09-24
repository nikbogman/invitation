import { Database } from './deps.ts';

export interface Guest {
    abbriviation: boolean,
    firstName: string,
    lastName: string,
    attending: boolean
}

export const db = new Database<Guest>('./db.json');