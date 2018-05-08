import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Member, Section } from './member.model';
import { AppData } from '../../assets/constants/app-data';

@Component({
    selector: 'app-add-edit-member',
    templateUrl: './add-edit-member.component.html',
    styleUrls: ['./add-edit-member.component.css']
})
export class AddEditMemberComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) { }
    member: Member = null;
    editRequest: boolean;

    /**
     * Method to be called on component initialization
     */
    ngOnInit() {
        this.route.params.subscribe(() => {
            const id = this.route.snapshot.params['id'];
            if (id) {
                this.editRequest = true;
                // edit
                // get member by using id from array
                this.member = AppData.memberListData.find(item => item.id == id);
                if (!this.member) {
                    this.router.navigate(['dashboard/members']);
                }
            } else {
                this.member = new Member();
                const sections = new Section();
                this.member.sections = sections;
            }
        });
    }

    /**
     * Method to be called on add/edit button click
     */
    addEditMember(): void {
        // check array if id exists update remaining otherwise new addition
        const memberExist = AppData.memberListData.find(item => item.id == this.member.id);
        if (!memberExist) {
            this.member.joinDate = new Date().toLocaleString();
            AppData.memberListData.push(this.member);
        } else {
            memberExist.joinDate = new Date().toLocaleString();
        }
        this.router.navigate(['dashboard/members']);
    }

    /**
     * Method to be called on delete member event
     */
    deleteMember(): void {
        const memberExist = AppData.memberListData.find(item => item.id == this.member.id);
        if (memberExist) {
            AppData.memberListData = AppData.memberListData.filter(item => item.id !== this.member.id);
        }
        this.router.navigate(['dashboard/members']);
    }
}
