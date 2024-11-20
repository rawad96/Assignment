import "../CSS/DashboardComponents.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from "react";
import axios from "axios";
import EditCar from "./EditComponents/EditCar";
import { useDispatch, useSelector } from "react-redux";

const CarsManagement = () => {
  const carsUrl = import.meta.env.VITE_API_BACKEND_URL + "cars";

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars);
  const [carForEdit, setcarForEdit] = useState();

  const DeleteCar = async (carId) => {
    try {
      const result = await axios.delete(`${carsUrl}/${carId}`);
      dispatch({
        type: "DELETECAR",
        payload: carId,
      });
      dispatch({
        type: "DELETECARFEATURES",
        payload: carId,
      });
      dispatch({
        type: "DELETEACCIDENTS",
        payload: carId,
      });
      alert("Car deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    { field: "mileage", headerName: "Mileage", flex: 0.7 },
    { field: "model_id", headerName: "Model Id", flex: 1.1 },
    {
      field: "price",
      headerName: "Price",
      flex: 0.7,
    },
    {
      field: "year",
      headerName: "Year",
      flex: 0.5,
    },
    {
      field: "Edit Car",
      cellRenderer: (params) => (
        <div>
          <button
            className="action-buttons"
            onClick={() => setcarForEdit({ ...params.data })}
          >
            Edit Car
          </button>
        </div>
      ),
      flex: 0.5,
      floatingFilter: false,
    },
    {
      field: "Delete Car",
      cellRenderer: (params) => (
        <div>
          <button
            className="action-buttons"
            onClick={() => DeleteCar(params.data.id)}
          >
            Delete Car
          </button>
        </div>
      ),
      flex: 0.5,
      floatingFilter: false,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
    };
  }, []);

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: "100%" }}>
        <AgGridReact
          rowData={cars}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          pagination={true}
          animateRows={true}
        />
      </div>

      {carForEdit && (
        <EditCar car={carForEdit} edited={() => setcarForEdit()} />
      )}
    </>
  );
};

export default CarsManagement;
