import React from 'react';
import ConfigForm from './components/ConfigForm';
import ChatPreview from './components/ChatPreview';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="md:max-h-[800px]  ">
            <ConfigForm />
          </div>
          <div className="md:max-h-[800px] ">
            <ChatPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;