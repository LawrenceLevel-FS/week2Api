import { useState } from "react";
//until components
import Button from "./untilComponents/Button";
import InputStacked from "./untilComponents/HorizonalInputandLable";

const InstructorForm = ({ formTitle }) => {
  const [formData, setFormData] = useState();

  //   handlers
  const inputHandler = (e) => {
    const { value, name } = e.target;
    console.log([name], value);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-500">{formTitle}</h1>
      <form>
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1`}
          labelStyle={`text-gray-800`}
          type="text"
          title="Name:"
          name="name"
          inputHandler={inputHandler}
        />
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1`}
          labelStyle={`text-gray-800`}
          type="email"
          name="email"
          title="Email:"
          inputHandler={inputHandler}
        />
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1`}
          labelStyle={`text-gray-800`}
          type="text"
          name="department"
          title="Department:"
          inputHandler={inputHandler}
        />
        <Button
          type="submit"
          style={`btn bg-sky-500 hover:bg-sky-600 px-4 rounded text-white`}
          name="Submit"
          onClickHandler={""}
        />
      </form>
    </div>
  );
};

export default InstructorForm;
