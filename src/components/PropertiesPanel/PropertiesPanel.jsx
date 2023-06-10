import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PropertiesPanel = ({ selectedElement, updateElement }) => {
  const [buttonInputs, setButtonInputs] = useState({
    text: selectedElement?.text,
    borderRadius: selectedElement?.borderRadius,
    bgColor: selectedElement?.bgColor,
  });

  const [dropdownInputs, setDropdownInputs] = useState({
    label: selectedElement?.label,
    option_1: selectedElement?.option_1,
    option_2: selectedElement?.option_2,
    option_3: selectedElement?.option_3,
  });

  const [textInputs, setTextInputs] = useState({
    label: selectedElement?.label,
    placeholder: selectedElement?.placeholder,
  });

  const [tableInputs, setTableInputs] = useState({
    heading_1: selectedElement?.heading_1,
    heading_2: selectedElement?.heading_2,
    heading_3: selectedElement?.heading_3,
  });

  const updateProperties = () => {
    setButtonInputs({
      text: selectedElement?.text,
      borderRadius: selectedElement?.borderRadius,
      bgColor: selectedElement?.bgColor,
    });
    setDropdownInputs({
      label: selectedElement?.label,
      option_1: selectedElement?.option_1,
      option_2: selectedElement?.option_2,
      option_3: selectedElement?.option_3,
    });
    setTextInputs({
      label: selectedElement?.label,
      placeholder: selectedElement?.placeholder,
    });
    setTableInputs({
      heading_1: selectedElement?.heading_1,
      heading_2: selectedElement?.heading_2,
      heading_3: selectedElement?.heading_3,
    });
  };
  
  useEffect(() => {
    updateProperties();
  }, [selectedElement]);

  const handleButtonInputs = (e) => {
    const { id, value } = e.target;
    setButtonInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDropdownInputs = (e) => {
    const { id, value } = e.target;
    setDropdownInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleTextInputs = (e) => {
    const { id, value } = e.target;
    setTextInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleTableInputs = (e) => {
    const { id, value } = e.target;
    setTableInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const updateElementProperties = () => {
    let updatedElement = { ...selectedElement };
    switch (selectedElement.component) {
      case "button":
        const parsedBorderRadius = parseInt(buttonInputs.borderRadius);
        updatedElement = {
          ...updatedElement,
          text: buttonInputs.text.trim().length > 0 ? buttonInputs.text : "Button",
          borderRadius: isNaN(parsedBorderRadius) ? 8 : parsedBorderRadius,
          bgColor: buttonInputs.bgColor.trim().length > 0 ? buttonInputs.bgColor : "blue",
        };
        break;
      case "textInput":
        updatedElement = {
          ...updatedElement,
          label: textInputs.label.trim().length > 0 ? textInputs.label : "Label",
          placeholder: textInputs.placeholder.trim().length > 0 ? textInputs.placeholder : "Enter Placeholder",
        };
        break;
      case "dropdown":
        updatedElement = {
          ...updatedElement,
          label: dropdownInputs.label.trim().length > 0 ? dropdownInputs.label : "Dropdown",
          option_1: dropdownInputs.option_1.trim().length > 0 ? dropdownInputs.option_1 : "Option 1",
          option_2: dropdownInputs.option_2.trim().length > 0 ? dropdownInputs.option_2 : "Option 2",
          option_3: dropdownInputs.option_3.trim().length > 0 ? dropdownInputs.option_3 : "Option 3",
        };
        break;
      case "table":
        updatedElement = {
          ...updatedElement,
          heading_1: tableInputs.heading_1.trim().length > 0 ? tableInputs.heading_1 : "Name",
          heading_2: tableInputs.heading_2.trim().length > 0 ? tableInputs.heading_2 : "Job",
          heading_3: tableInputs.heading_3.trim().length > 0 ? tableInputs.heading_3 : "Employed",
        };
        break;
      default:
        break;
    }
    return updatedElement;
  };

  const notify = () =>
    toast.success("Changes Applied", {
      duration: 1200,
      position: "top-center",
    });

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedElement = updateElementProperties();
    updateElement(updatedElement);
    // updateProperties();
    notify();
  };

  if (!selectedElement) {
    return (
      <h1 className="flex items-center justify-center m-auto my-20 font-medium">
        Select an element to edit.
      </h1>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      {selectedElement.component === "button" ? (
        <>
          <div className="grid grid-cols-2 items-center justify-center">
            <label htmlFor="text" className="text-start">
              Text
            </label>
            <input
              type="text"
              id="text"
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Text"
              value={buttonInputs.text}
              onChange={handleButtonInputs}
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="borderRadius" className="text-start">
              Border radius
            </label>
            <input
              type="number"
              id="borderRadius"
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Radius"
              value={buttonInputs.borderRadius}
              onChange={handleButtonInputs}
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="bgColor" className="text-start">
              Background color
            </label>
            <input
              type="text"
              id="bgColor"
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter BgColor"
              onChange={handleButtonInputs}
              value={buttonInputs.bgColor}
            />
          </div>
        </>
      ) : selectedElement.component === "textInput" ? (
        <>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="label" className="text-start">
              Label
            </label>
            <input
              type="text"
              id="label"
              value={textInputs.label}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter BgColor"
              onChange={handleTextInputs}
            />
          </div>

          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="placeholder" className="text-start">
              Placeholder
            </label>
            <input
              type="text"
              id="placeholder"
              value={textInputs.placeholder}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Placeholder"
              onChange={handleTextInputs}
            />
          </div>
        </>
      ) : selectedElement.component === "dropdown" ? (
        <>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="label" className="text-start">
              Label
            </label>
            <input
              type="text"
              value={dropdownInputs.label}
              id="label"
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter BgColor"
              onChange={handleDropdownInputs}
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="option_1" className="text-start">
              Option 1
            </label>
            <input
              type="text"
              id="option_1"
              value={dropdownInputs.option_1}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Option 1"
              onChange={handleDropdownInputs}
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="option_2" className="text-start">
              Option 2
            </label>
            <input
              type="text"
              id="option_2"
              value={dropdownInputs.option_2}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Option 2"
              onChange={handleDropdownInputs}
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="option_3" className="text-start">
              Option 3
            </label>
            <input
              type="text"
              id="option_3"
              value={dropdownInputs.option_3}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Option 3"
              onChange={handleDropdownInputs}
            />
          </div>
        </>
      ) : selectedElement.component === "table" ? (
        <>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="heading_1" className="text-start">
              Heading 1
            </label>
            <input
              type="text"
              id="heading_1"
              value={tableInputs.heading_1}
              onChange={handleTableInputs}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Heading 1"
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="heading_2" className="text-start">
              Heading 2
            </label>
            <input
              type="text"
              id="heading_2"
              value={tableInputs.heading_2}
              onChange={handleTableInputs}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Heading 2"
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-center ">
            <label htmlFor="heading_3" className="text-start">
              Heading 3
            </label>
            <input
              type="text"
              id="heading_3"
              value={tableInputs.heading_3}
              onChange={handleTableInputs}
              className="bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400"
              placeholder="Enter Heading 3"
            />
          </div>
        </>
      ) : (
        ""
      )}

      <button
        type="submit"
        className="py-1 mx-10 hover:bg-[#8352eb] transition-all duration-300 text-slate-100 tracking-wide bg-[#9767FF] rounded-md"
      >
        Apply Changes
      </button>
    </form>
  );
};

export default PropertiesPanel;
