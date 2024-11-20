import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Features = () => {
  const features = useSelector((state) => state.features);

  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    { field: "name", headerName: "Name", flex: 0.7 },
    {
      field: "description",
      headerName: "Description",
      tooltipField: "description",
      flex: 1.1,
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
          rowData={features}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          pagination={true}
          animateRows={true}
          tooltipShowDelay={0}
        />
      </div>
    </>
  );
};

export default Features;
