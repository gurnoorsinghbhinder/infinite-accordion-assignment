const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime().toString(),
        name: item,
        isFolder,
        items: []
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = (tree, nodeId) => {
    if (tree.id === nodeId) {
      return null;
    }

    if (tree.items && tree.items.length > 0) {
      const updatedItems = tree.items
        .map(item => deleteNode(item, nodeId))
        .filter(item => item !== null); 
      
      return { ...tree, items: updatedItems };
    }

    return tree;
  };

  const renameNode = (tree, nodeId, newName) => {
    if (tree.id === nodeId) {
      return { ...tree, name: newName };
    }

    if (tree.items && tree.items.length > 0) {
      const updatedItems = tree.items.map(item => renameNode(item, nodeId, newName));
      return { ...tree, items: updatedItems };
    }

    return tree;
  };

  const findNode = (tree, nodeId) => {
    if (tree.id === nodeId) {
      return tree;
    }

    if (tree.items && tree.items.length > 0) {
      for (let item of tree.items) {
        const found = findNode(item, nodeId);
        if (found) return found;
      }
    }

    return null;
  };

  return { 
    insertNode, 
    deleteNode, 
    renameNode, 
    findNode 
  };
};

export default useTraverseTree;
