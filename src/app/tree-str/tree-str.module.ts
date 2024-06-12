import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeStrRoutingModule } from './tree-str-routing.module';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';


@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    TreeStrRoutingModule
  ]
})
export class TreeStrModule { }
