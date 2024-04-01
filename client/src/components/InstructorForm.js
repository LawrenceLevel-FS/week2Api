//using react
import { useState, useEffect } from "react";
//until components
import Button from "./untilComponents/Button";
import InputStacked from "./untilComponents/HorizonalInputandLable";
// imporint API
import API from "../API";

const InstructorForm = ({ formTitle }) => {
  const [formData, setFormData] = useState({});

  // ** handlers
  const inputHandler = (e) => {
    const { value, name } = e.target;
    console.log(formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("form fill out", formData);
      const data = await API.createInstructor(formData);
      console.log("data from API", data.data);
    } catch (error) {
      console.warn(error.message);
      console.warn(error.response.data.message);
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-500">{formTitle}</h1>
      <form onSubmit={formSubmitHandler}>
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1 mb-4`}
          labelStyle={`text-gray-800`}
          type="text"
          title="Name:"
          name="name"
          inputHandler={inputHandler}
        />
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1 mb-4`}
          labelStyle={`text-gray-800`}
          type="email"
          name="email"
          title="Email:"
          inputHandler={inputHandler}
        />
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1 mb-4`}
          labelStyle={`text-gray-800`}
          type="text"
          name="department"
          title="Department:"
          inputHandler={inputHandler}
        />
        <InputStacked
          InputStyle={`border rounded w-1/3 my-1 mb-4`}
          labelStyle={`text-gray-800`}
          type="text"
          name="office"
          title="Office:"
          inputHandler={inputHandler}
        />
        <Button
          type="submit"
          style={`btn bg-sky-500 hover:bg-sky-600 px-4 rounded text-white`}
          name="Submit"
        />
      </form>
    </div>
  );
};

export default InstructorForm;
