import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //productと言うpropertyを定義　@Inputデコレーターはプロパティ値がコンポーネントの親（この場合は商品リストコンポーネント）から渡されることを示します。
  @Output() notify = new EventEmitter(); // notifyと言うpropertyを定義　@Output()デコレーターと EventEmitter() のインスタンスを使って、notifyという名前のプロパティを定義します。 これにより、notifyプロパティの値が変更されたときに製品アラートコンポーネントがイベントを発行することが可能になります。
  constructor() { }

  ngOnInit() {
  }

}