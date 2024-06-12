import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from 'src/app/module/tree-module';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node: TreeNode | undefined;
  @Output() addChild = new EventEmitter<TreeNode>();

  onAddChild() {
    this.addChild.emit(this.node);
  }

  addChilds(event: TreeNode) {
    this.addChild.emit(event);
  }
}
