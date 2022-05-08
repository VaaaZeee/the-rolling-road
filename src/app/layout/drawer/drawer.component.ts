import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  public menuItems: MenuItem[] = [
    { id: 'home', name: 'Home', url: '/home', disabled: true },
    { id: 'products', name: 'Products', url: '/products' },
  ];
  constructor(public router: Router) {}

  ngOnInit() {}
}
