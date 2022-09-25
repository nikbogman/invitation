import { Params } from "https://deno.land/x/dejs@0.10.3/mod.ts";
import { renderFile } from "./deps.ts";

const viewsFolder = `${Deno.cwd()}/views/`;
export async function renderEjs(file:string, params:Params){
    return await renderFile(viewsFolder + file + '.ejs', params);
}