import InputField from "../components/InputField/InputField";
import { useRef } from "react";
import InputModal from "./InputModal";

export default function AddProject({ onCloseInput, onSaved }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const dialog = useRef();



  const handleInputValues = () => {
    const values = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    if (
      titleRef.current.value !== "" &&
      descriptionRef.current.value !== "" &&
      dateRef.current.value !== ""
      
    ) {
      console.log("Validation passed. Saving values...");
      onSaved(values);
      onCloseInput();
    } else {
      console.log("Validation failed. Opening modal...");
      dialog.current.open();
    }
  };

  return (
    <>
      <InputModal ref={dialog} />
      <div className="flex flex-col items-start px-7 w-1/2  mt-48 space-y-4  ">
        <div className="flex justify-end space-x-4  w-full">
          <button onClick={onCloseInput}>Cancel</button>
          <button
            onClick={handleInputValues}
            className="bg-slate-900 text-slate-200 p-1 px-6 rounded-md"
          >
            Save
          </button>
        </div>
        <InputField
          ref={titleRef}
          field="input"
          label="Title"
          labelFor="title"
          type="text"
        />
        <InputField
          ref={descriptionRef}
          field="textarea"
          label="Description"
          labelFor="description"
        />
        <InputField
          ref={dateRef}
          field="input"
          label="Date"
          labelFor="date"
          type="date"
        />
      </div>
    </>
  );
}
