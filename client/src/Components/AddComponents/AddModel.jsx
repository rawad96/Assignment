import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddModel = ({ selecteTable }) => {
  const dispatch = useDispatch();
  const modelsUrl = import.meta.env.VITE_API_BACKEND_URL + "models";

  const [formData, setformData] = useState({
    name: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveData = async (e) => {
    e.preventDefault();
    const dataToSave = {
      name: formData.name,
    };

    try {
      const result = await axios.post(modelsUrl, dataToSave);
      dispatch({
        type: "ADDMODEL",
        payload: { ...dataToSave, id: result.data.id },
      });
      selecteTable();
      alert("Model added successfuly");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="actions-div">
        <div className="text-center py-3">
          <h3>Add Model</h3>
        </div>
        <form onSubmit={saveData}>
          <div>
            <label htmlFor="name">Model Title</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModel;
