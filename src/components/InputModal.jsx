import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";

export default function InputModal({ ref }) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log("Modal is open")
                dialog.current.showModal();
            }
        
                 
        }
    })
    
  return createPortal(
    <dialog ref={dialog} className="rounded-lg px-6 p-7 shadow-lg ">
      <h2 className="text-xl font-bold mb-3.5">Invalid Input</h2>
      <p className="mb-3.5">Oops...looks like you forgot to enter a value.</p>
      <p className="mb-3.5">Please make sure you provide a valid value for every input field</p>
      <form className="flex justify-end" method="dialog">
        <button  className="justify-start bg-stone-400 p-2 px-4 rounded-md">Okay</button>
      </form>
    </dialog>, document.getElementById("modal-root")
  );
}
