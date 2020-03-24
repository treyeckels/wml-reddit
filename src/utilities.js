class Node {
  constructor(id, data) {
    this.data = data;
    this.id = id;
    this.children = [];
  }
}

const getParentNodeById = (root, id) => {
  if (root.id === id) {
    return root;
  }
  const len = root.children.length;
  if (!len) {
    return;
  }
  for (let i = 0; i < len; i++) {
    const node = getParentNodeById(root.children[i], id);
    if (node) {
      return node;
    }
  }
};

const getNormalizedId = id => {
  let normalizedId = id;
  let matches = id.match(/t\d+_(.*)/);
  if (matches && matches.length) {
    normalizedId = matches[1];
  }
  return normalizedId;
};

export { Node, getParentNodeById, getNormalizedId };
