# React Splitter UI

A React component for resizable split-pane layouts with menu-driven positioning.

## Overview

This is a sample from a React application I built at a financial services firm. It demonstrates:

- **React class components** - State management with constructor and setState
- **Component composition** - Parent-child communication via props and callbacks
- **Event handling** - Menu actions and drag-to-resize functionality
- **PropTypes** - Runtime type checking for component props
- **Controlled components** - Splitter position controlled via parent state

## Features

- Draggable splitter bar to resize left/right panes
- Menu actions for quick positioning (left, center, right)
- Responsive to window resize
- Clean separation between container and content components

## Component Structure

```
App
├── Menubar (onMenuItemSelect callback)
└── Splitter
    ├── LeftPane (content passed as prop)
    └── RightPane (content passed as prop)
```

## Key Patterns Demonstrated

### State Management
```javascript
constructor() {
  super();
  this.state = {
    SplitPos: (window.innerWidth / 2)
  }
}
```

### Callback Props
```javascript
<Menubar onMenuItemSelect={this.handleMenuItemSelect.bind(this)} />
<Splitter onSplitChange={this.handleSplitChange.bind(this)} />
```

### Controlled Positioning
```javascript
handleMenuItemSelect(Item) {
  switch(Item) {
    case "SlideLeft":
      this.setState({ SplitPos: 0 });
      break;
    case "SlideCenter":
      this.setState({ SplitPos: (window.innerWidth / 2) });
      break;
  }
}
```

## Technology Stack

- React 16.x
- PropTypes for type checking
- CSS Flexbox for layout

## Usage

```javascript
import Splitter from './Components/Splitter';

<Splitter
  SplitPos={this.state.SplitPos}
  LeftPane={<YourLeftComponent />}
  RightPane={<YourRightComponent />}
  onSplitChange={this.handleSplitChange.bind(this)}
/>
```

## Author

Stephen Lantz - Senior Database Engineer
20+ years SQL Server, PostgreSQL, ETL, and data architecture

## Note

This is representative sample code demonstrating React patterns and component architecture.
