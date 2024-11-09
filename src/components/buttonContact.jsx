"use client"
import { useState } from 'react';
import ModalWithTabs from '@/components/modalTabs';

export default function ButtonContact({child}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div >
      <button onClick={() => setModalOpen(true)} className="">
       {child}
      </button>

      <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}