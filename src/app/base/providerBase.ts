import { HttpResultModel } from './../models/HttpResultModel';
import { HttpProvider } from './../../providers/http/http';
export abstract class ProviderBase<T>{
    constructor(public url: string, public http: HttpProvider){

    }

    get(): Promise<HttpResultModel>{
        return this.http.get(this.url);
    }
    getById(id): Promise<HttpResultModel>{
        return this.http.get(`${this.url}/${id}`);
    }

    post(model: T): Promise<HttpResultModel>{
        return this.http.post(this.url, model);
    }

    put (id, model: T): Promise<HttpResultModel>{
        return this.http.put(`${this.url}/${id}`,model);
    }

    delete(id): Promise<HttpResultModel>{
        return this.http.delete(`${this.url}/${id}`);
    }
}