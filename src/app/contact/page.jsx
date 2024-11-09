"use client"
import { useState } from 'react';
import ModalWithTabs from '@/components/modalTabs';

export default function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4">
      <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal with Tabs
      </button>

      <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}