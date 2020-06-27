export class LocalStorageObjects{

    static saveObject(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getObject(key){
        return JSON.parse(localStorage.getItem(key));
    }
}