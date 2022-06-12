import { Component } from '@angular/core';
import { ProductItems } from './shared/product-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PostTaskAngularApp';

  readonly baseURL='https://localhost:44350/api/ProductItems/1002'
  formData:ProductItems = new ProductItems() ;
}
