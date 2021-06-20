import React, { useState } from "react";
import Modal from "./Modal/Modal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <Modal show={show} onClose={() => setShow(false)} title="My Modal">
          <p>This is modal body</p>
        </Modal>
      )}
    </div>
  );
}
