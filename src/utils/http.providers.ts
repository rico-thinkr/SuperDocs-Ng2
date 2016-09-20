

import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import './rxjs-extensions';

export class Http_Service {

    /**
     * [constructor description]
     * @param  {Http}   privatehttp [description]
     * @return {[type]}             [description]
     */
    constructor(private http: Http) {

    }

    /**
     * Use http request get data from api ..
     * @param  {api}    string [where the request to]
     */
    getData<T>(api: string): Observable<T> {
        return this.http.get(api)
            .map(this.extractData)
            .catch(this.handleError);
    }


    /**
     * post data to server.
     */
    postData<T>(api: string, data: T): Observable<T> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(`[post data]: ${body} \n [api address]: ${api}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(api, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /**
     * @param  {Response} res [response object]
     * @return {[any]}       [return data of response]
     */
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    /**
     * error handler
     * @param  {any}    error [description]
     * @return {[type]}       [description]
     */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
