import { Component, OnInit } from '@angular/core';

import { childRoutes, AppRoute } from '../../child-routes';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkTreeModule } from '@angular/cdk/tree';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav-closed',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    CdkTreeModule,
    RouterModule
  ],
  templateUrl: './side-nav-closed.component.html',
  styleUrl: './side-nav-closed.component.css'
})
export class SideNavClosedComponent {
  treeControl = new NestedTreeControl<AppRoute>(node => node.children);
  dataSource = new ArrayDataSource(childRoutes);
  hasChild = (_: number, node: AppRoute) => !!node.children && node.children.length > 0;
  constructor() { }

  ngOnInit(): void {
  }
}
