import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './product.model';
/**
 * This service is used to handle product data related stuffs
 */
@Injectable()
export class ProductService {

        /**
         * Constructor:
         * @param http
         */
        constructor(private http: HttpClient) { };

        /**
         * This method is used to return products list from json file
         */
        public getProducts(): Observable<any> {
                return this.http.get('~/../assets/mockJsonResponse/productList.json');
        }
};
