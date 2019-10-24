import React from 'react';
import './App.scss';
import Menu from '../Template/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faCalendarCheck,
  faTrash,
  faCheck,
  faUndo,
  faSearch,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faPlus,
  faCalendarCheck,
  faTrash,
  faCheck,
  faUndo,
  faSearch,
  faWindowClose
);

function App() {
  return (
    <div className="container">
      <Menu />
    </div>
  );
}

export default App;
