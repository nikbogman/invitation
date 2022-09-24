import { Database } from 'https://deno.land/x/aloedb/mod.ts';

interface Guest {
    abbriviation: boolean,
    firstName: string,
    lastName: string,
    attending: boolean
}

const db = new Database<Guest>('./db.json');
