import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
})
export class DrawerItemComponent implements OnInit {
  @Input() public menuItem: MenuItem | undefined;

  constructor() {}

  ngOnInit() {}
}
