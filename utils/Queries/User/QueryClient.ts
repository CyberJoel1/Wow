export const fetch = new Map<string, Promise<any>>();
export function queryClient(name:string,query: () => Promise<any>){
    if(!fetch.has(name)){
        fetch.set(name,query());
    }
    return fetch.get(name);
}

