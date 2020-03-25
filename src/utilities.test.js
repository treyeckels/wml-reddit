import { Node, getParentNodeById, getNormalizedId } from './utilities';

test('getNormalizedId works correctly', () => {
  let id = getNormalizedId('t1_foobar');
  expect(id).toBe('foobar');
});

test('getParentNodeById works correctly', () => {
  const root = new Node(0, {});
  const node1 = new Node(1, {});
  const node2 = new Node(2, {});
  const node3 = new Node(3, {});
  const node4 = new Node(4, {});
  const node5 = new Node(5, {});
  node3.children.push(node4);
  node4.children.push(node5);
  root.children.push(node1, node2, node3);
  const node5Parent = getParentNodeById(root, 4);
  const node4Parent = getParentNodeById(root, 3);
  const node3Parent = getParentNodeById(root, 0);
  const node2Parent = getParentNodeById(root, 0);
  const node1Parent = getParentNodeById(root, 0);
  expect(node5Parent).toBe(node4);
  expect(node4Parent).toBe(node3);
  expect(node3Parent).toBe(root);
  expect(node2Parent).toBe(root);
  expect(node1Parent).toBe(root);
});
