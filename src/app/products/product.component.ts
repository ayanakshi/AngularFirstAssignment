import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  memberList: Product[] = null;
  dataSource = new MatTableDataSource(this.memberList);
  displayedColumns = ['Id', 'Name', 'Price'];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.memberList = (<Product[]>data);
      this.dataSource.data = this.memberList;
    });
  }

}
