import React, { useState } from 'react';
import Button from './components/Button';
import InputField from './components/InputField';
import Modal from './components/Modal';
import './App.css';
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">Component Library Design System</h1>

      <InputField
        label="Name"
        id="username"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={() => setModalOpen(true)}>Show Modal</Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Welcome">
        <p className="mb-4">Hello, {name || 'Guest'}! This is a reusable modal.</p>
        <Button variant="secondary" onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
}

export default App;