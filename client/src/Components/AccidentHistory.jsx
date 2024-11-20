import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const AccidentHistory = () => {
  const accidents = useSelector((state) => state.accidents);

  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    { field: "carID", headerName: "Car Id", flex: 0.7 },
    { field: "name", headerName: "Driver Name", flex: 1.1 },
    {
      field: "description",
      headerName: "Description",
      flex: 0.7,
    },
    {
      field: "accidentDate",
      headerName: "Accident Date",
      flex: 0.5,
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
          rowData={accidents}
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

export default AccidentHistory;
