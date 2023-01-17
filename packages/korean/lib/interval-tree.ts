export class IntervalTree {
  root: IntervalTreeNode | null;
  constructor(start?: number, end?: number, value?: string) {
    this.root = start && end && value ? new IntervalTreeNode(start, end, value) : null;
  }
  
  insert(start: number, end: number, value: string): IntervalTreeNode {
    const node = new IntervalTreeNode(start, end, value);
    if (this.root === null) {
      this.root = node;
      return node;
    }
    this.root.insert(node);
    return node;
  }
  
  search(num: number): IntervalTreeNode[] {
    if (this.root === null) {
      return [];
    }
    return this.root.search(num);
  }

  exists(num: number): boolean {
    return this.search(num).length > 0;
  }
}

export class IntervalTreeNode {
  start: number;
  end: number;
  value: string;
  left: IntervalTreeNode | null;
  right: IntervalTreeNode | null;
  constructor(start: number, end: number, value: string) {
    this.start = start;
    this.end = end;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node: IntervalTreeNode) {
    if (node.start < this.start) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(node);
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(node);
      }
    }
  }

  search(num: number): IntervalTreeNode[] {
    const result = [];
    if (this.left !== null) {
      result.push(...this.left.search(num));
    }
    if (this.start <= num && num <= this.end) {
      result.push(this);
    }
    if (this.right !== null) {
      result.push(...this.right.search(num));
    }
    return result;
  }
}