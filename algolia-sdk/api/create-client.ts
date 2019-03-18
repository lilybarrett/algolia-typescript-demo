import algoliasearch, { Client, ClientOptions } from "algoliasearch";
import { CONFIG } from "../config";

export const createClient = (opts?: ClientOptions): Client => {
    return algoliasearch(CONFIG.appId, CONFIG.adminKey, opts);
};

export const client = createClient();
