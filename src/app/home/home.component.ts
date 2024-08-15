import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servies/products.service';
import { Product } from '../iproduct';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) { }
  products: Product[] = [];

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._ProductsService.getProduct().subscribe({
      next: (res) => {
        this.products = res;
        console.log(res[0].image);
      },
      error: (error) => {
        console.log(error)
      },
    })
  }
}
