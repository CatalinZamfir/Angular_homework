import { Component, OnInit } from '@angular/core';
import {List} from '../list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  list: List [] = [];
  constructor() {
    const jacket: List = new List();
    jacket.name = 'Jeans Jacket';
    jacket.brand = 'ZARA';
    jacket.size = 'M';
    jacket.price = 90;
    jacket.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ130LxZPjbkYS5oOVaAIsJjve55Weng_EyaJ61CQssgU2aNggNQoe9ALo7BJ6jQ4xOUD78xZj5w&usqp=CAc';

    const tShirt: List = new List();
    tShirt.name = 'T-shirt printed';
    tShirt.brand = 'MANGO';
    tShirt.size = 'XL';
    tShirt.price = 40.20;
    tShirt.image = 'https://ae01.alicdn.com/kf/Hc0d06d55e19f4f6c8684192848aaa0e7o/Mango-T-Shirt-Mango-Mens-T-shirt-Streetwear-Mango-T-Shirt-Mango-camiseta-2020-funny-new.jpg_q50.jpg';

    const glasses: List = new List();
    glasses.name = 'Sunglasses';
    glasses.brand = 'POLAROID';
    glasses.size = '52mm';
    glasses.price = 55.60;
    glasses.image = 'https://cdni.lensa.ro/images/products/img1/20961/full/polaroid-ochelari-de-soare-barbati-polaroid-pld-2050-s-807-m9-51557.jpeg';

    const sneakers: List = new List();
    sneakers.name = 'Sneakers black';
    sneakers.brand = 'CONVERSE';
    sneakers.size = '42';
    sneakers.price = 96;
    sneakers.image = 'https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000009160002_01_ts.jpg';

    this.list.push(jacket);
    this.list.push(tShirt);
    this.list.push(glasses);
    this.list.push(sneakers);
  }

  ngOnInit(): void {
  }
  buy(product: List): void{
    console.log(product.name);
  }

}
