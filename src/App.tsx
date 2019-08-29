import React from 'react';
import TaskManager from './TaskManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskManager test="just a test" />
    </div>
  );
}

export default App;
