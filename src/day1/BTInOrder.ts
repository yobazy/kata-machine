function helper(node: BinaryNode<number> | null, result: number[]) {
  if (node === null) {
    return;
  }

  helper(node.left, result);
  result.push(node.value);
  helper(node.right, result);
}

export default function in_order_search(head: BinaryNode<number> | null): number[] {
  let ans: number[] = [];
  if (head !== null) {
    helper(head, ans);
  }
  return ans;
}