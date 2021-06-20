import React, { useState } from "react";
import Modal from "./Modal/Modal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && <Modal show={show}></Modal>}
      {/* if show is true will show modal */}
      {/* <Modal onClose={() => setShow(false)} show={show} /> */}
    </div>
  );
}
