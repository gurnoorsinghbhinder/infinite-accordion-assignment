import { useState } from "react";
import './style.css'
import folderData from './../data.json'

function App() {
  const [folders, setFolders] = useState([folderData]);
  const [openFolders, setOpenFolders] = useState({});
  const [showInput, setShowInput] = useState(null);

  function toggleFolder(id) {
    setOpenFolders({
      ...openFolders,
      [id]: !openFolders[id]
    });
  }

  function addFolder(parentId, name) {
    function findAndAdd(items) {
      return items.map(item => {
        if (item.id === parentId) {
          return {
            ...item,
            items: [...item.items, {
              id: Date.now(),
              name: name,
              isFolder: true,
              items: []
            }]
          };
        }
        if (item.items) {
          return { ...item, items: findAndAdd(item.items) };
        }
        return item;
      });
    }
    setFolders(findAndAdd(folders));
    setShowInput(null);
  }

  function deleteItem(id) {
    function findAndDelete(items) {
      return items.filter(item => item.id !== id).map(item => {
        if (item.items) {
          return { ...item, items: findAndDelete(item.items) };
        }
        return item;
      });
    }
    setFolders(findAndDelete(folders));
  }

  function showItem(item, level = 0) {
    const isOpen = openFolders[item.id];
    
    return (
      <div key={item.id} style={{ marginLeft: level * 25 }}>
        <div className="item-row">
          <div onClick={() => item.isFolder && toggleFolder(item.id)}>
            {item.isFolder && <span>{isOpen ? '📂' : '📁'}</span>}
            
            <span style={{ marginRight: '10px' }}>
              {item.name}
            </span>
            
            {item.isFolder && <span>{isOpen ? '▼' : '▶'}</span>}
          </div>
          
          <div className="buttons">
            {item.isFolder && (
              <button onClick={() => {
                setShowInput(item.id);
                setOpenFolders({...openFolders, [item.id]: true});
              }}>
                +
              </button>
            )}
            <button onClick={() => deleteItem(item.id)}>🗑️</button>
          </div>
        </div>
        
        {item.isFolder && isOpen && (
          <div>
            {showInput === item.id && (
              <div style={{ marginLeft: 25 }}>
                📁 <input
                  placeholder="Folder name"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value) {
                      addFolder(item.id, e.target.value);
                    }
                  }}
                  onBlur={() => setShowInput(null)}
                />
              </div>
            )}
            
            {item.items && item.items.map(child => showItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Infinite Accordian</h1>
      {folders.map(item => showItem(item))}
    </div>
  );
}

export default App;