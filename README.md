# Infinite Accordion

A dynamic, nested folder structure component built with React and Vite. This project demonstrates an infinite accordion interface where users can create, manage, and navigate through hierarchical folder structures.

## 🚀 Features

- **Infinite Nesting**: Create folders within folders with unlimited depth
- **Dynamic Management**: Add, delete in real-time
- **Interactive UI**: Click to expand/collapse, double-click to rename
- **Visual Hierarchy**: Clear indentation shows folder structure
- **Responsive Design**: Hover effects and smooth transitions
- **Modern Styling**: CSS variables for consistent theming

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS Variables** - Modern styling approach
- **JavaScript** - Core functionality

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gurnoorsinghbhinder/infinite-accordion-assignment.git
   cd infinite-accordion-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🎯 How to Use

- **Expand/Collapse**: Click on folder icons (📁/📂) or arrows (▶/▼)
- **Add Folder**: Hover over a folder and click the `+` button
- **Delete Item**: Hover over any item and click the `🗑️` button
- **Navigate**: Use keyboard shortcuts (Enter to save)

## 🏗️ Project Structure

```
src/
├── App.jsx          # Main application component
├── style.css        # Styling with CSS variables
├── hooks/           # Custom React hooks
│   └── use-traverse-tree.js
└── data.json        # Initial folder structure
```

## 🎨 Key Components

- **Recursive Rendering**: Dynamic tree structure rendering
- **State Management**: React hooks for managing folder states
- **Event Handling**: Keyboard and mouse interactions
- **CSS Variables**: Maintainable and consistent styling

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Technical Details

- Built as a learning project demonstrating React concepts
- Uses functional components and hooks
- Implements recursive tree traversal algorithms
- Features modern CSS with custom properties

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
