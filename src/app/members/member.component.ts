import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from './member.service';
import { Member } from './member.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

// This component is used to show member data
export class MemberComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  memberList: Member[] = null;
  dataSource = new MatTableDataSource(this.memberList);
  displayedColumns = ['ID', 'Name', '1st', '2nd', '3rd', 'Join Date', 'Status', 'Update'];
  searchText = '';

  constructor(private router: Router, private memberService: MemberService) { }

  // Life cycle hook method to initialize paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // Taken from array just to enable adding of entries on add member event
    const data = this.memberService.getMembersData();
    this.memberList = data;
    this.dataSource.data = this.memberList;
    this.dataSource.filterPredicate = this.customFilter;
  }

  // Filter for the datatable filter process
  customFilter(item: Member, searchText: string): boolean {
    if ((item.id.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) ||
      (item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)) {
      return true;
    }
    else {
      return false;
    }
  }

  // Method to be called when clicked on filter button
  onSearchTextChange(): void {
    this.searchText = this.searchText.trim();
    this.searchText = this.searchText.toLowerCase();
    this.dataSource.filter = this.searchText;
  }

  // Method to be called when clicked on create a new member button
  addNewMember(): void {
    this.router.navigate(['dashboard/members/new']);
  }

  // Method to be called when clicked on Edit/update button
  memberUpdate(id): void {
    this.router.navigate(['dashboard/members/edit', id]);
  }
}
