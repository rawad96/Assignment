import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const CarFeatures = () => {
  const carFeatures = useSelector((state) => state.carFeatures);

  const [colDefs, setColDefs] = useState([
    {
      field: "carId",
      headerName: "Car Id",
      flex: 0.3,
    },
    { field: "featureId", headerName: "Feature Id", flex: 0.7 },
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
          rowData={carFeatures}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          pagination={true}
          animateRows={true}
        />
      </div>
    </>
  );
};

export default CarFeatures;
