import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppData } from '../../assets/constants/app-data';
import { Member } from './member.model';
/**
 * This service is used to handle member data related stuffs
 */
@Injectable()
export class MemberService {

        /**
         * Constructor:
         * @param http
         */
        constructor(private http: HttpClient) { };

        /**
         * This method is used to return member list from json file
         * Not in use right now
         */
        public getMembers(): Observable<any> {
                return this.http.get('~/../assets/mockJsonResponse/memberList.json');
        }

        /**
         * This method is used to return member data from .ts file
         */
        public getMembersData(): Array<Member> {
                return AppData.memberListData;
        }
};
