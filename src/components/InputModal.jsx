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
    <dialog ref={dialog} className="rounded-lg px-6 p-8 shadow-lg flex flex-col gap-4">
      <h2 className="text-xl font-bold">Invalid Input</h2>
      <p>Oops...looks like you forgot to enter a value.</p>
      <p>Please make sure you provide a valid value for every input field</p>
      <form className="flex justify-end" method="dialog">
        <button  className="justify-start">Okay</button>
      </form>
    </dialog>, document.getElementById("modal-root")
  );
}
