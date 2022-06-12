import { Component, OnInit } from '@angular/core';
import { ProductItemsService } from 'src/app/shared/product-items.service';
import { NgForm } from '@angular/forms';
import { ProductItems } from 'src/app/shared/product-items.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-items-form',
  templateUrl: './product-items-form.component.html',
  styles: [
  ]
})
export class ProductItemsFormComponent implements OnInit {

  constructor(public service : ProductItemsService , private toastr:ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProductDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Product Items Register')  
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putProductDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Product Items Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ProductItems();
  }

}
