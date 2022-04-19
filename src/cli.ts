import { deserialize, serialize, TreeNode } from "./serializeBst/serializeBst";

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
// const arr = [10, 15, 6, 3, 8, 20, 11, 0];
// const tree = new BSTree();
// arr.forEach((n) => {
//   tree.addNode(n);
// });
// const dfs_i = tree.dfs_i();
// console.log(dfs_i);
// const dfs_r = tree.dfs_r();
// console.log(dfs_r);
// const bfs = tree.bfs();
// console.log(bfs);

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
const res = deserialize(serialize(root));
console.log(res);
