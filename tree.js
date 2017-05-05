class Tree {
    constructor(label, left, right) {
      this.label = label;
      this.left = left;
      this.right = right;
    }
}

function *inorder(t) {
  if (t) {
    yield * inorder(t.left);
    yield t.label;
    yield * inorder(t.right);
  }
}

function make(t) {
  if (t.length == 1) return new Tree(t[0]);
  return new Tree(t[0], make(t[1]), make(t[2]));
}
let tree = make(['d', ['b', ['a'], ['c']],
                      ['f', ['e'], ['g']]]);

for (let node of inorder(tree)) {
  console.log(node);
}