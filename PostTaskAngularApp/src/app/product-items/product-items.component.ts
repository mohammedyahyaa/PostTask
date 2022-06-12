import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductItems } from '../shared/product-items.model';
import { ProductItemsService } from '../shared/product-items.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styles: [
  ]
})
export class ProductItemsComponent implements OnInit {

  constructor(public service: ProductItemsService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: ProductItems) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProductDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Product Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }

}
