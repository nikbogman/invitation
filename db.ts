import { Database } from './deps.ts';

export interface Guest {
    id: string,
    abbriviation: string,
    firstName: string,
    lastName: string,
    attending?: boolean
}

export const db = new Database<Guest>('./db.json');