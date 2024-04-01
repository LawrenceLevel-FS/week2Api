import axios from "axios";

const API = {};

API.createInstructor = async (instructor) => {
  const response = await axios.post("http://localhost:3001/instructor", {
    instructor,
  });

  return response;
};

export default API;
