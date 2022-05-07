import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
})
export class DrawerItemComponent implements OnInit {
  @Input() public name: string | undefined;

  constructor() {}

  ngOnInit() {}
}
