import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { IconModule } from '../shared/icon/icon.module';
import { DrawerItemComponent } from './drawer/drawer-item/drawer-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    IconModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    DrawerComponent,
    DrawerItemComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
