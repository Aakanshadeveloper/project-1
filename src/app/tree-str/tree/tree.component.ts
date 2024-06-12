import { Component } from '@angular/core';
import { TreeNode } from 'src/app/module/tree-module';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  rootNode: TreeNode = {
    id: 'root',
    name: 'Root Node',
    children: []
  };

  addRootNode() {
    const nodeName = prompt('Enter root node name:');
    if (nodeName) {
      this.rootNode.children.push({
        id: this.generateId(),
        name: nodeName,
        children: []
      });
    }
  }

  addChild(parentNode: TreeNode) {
    const nodeName = prompt('Enter child node name:');
    if (nodeName) {
      parentNode.children.push({
        id: this.generateId(),
        name: nodeName,
        children: []
      });
    }
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}

