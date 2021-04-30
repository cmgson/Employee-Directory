import React from "react";
import TableBody from "./TableBody";

function DataTable({ headings, users, sortingHandler }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
      {/* maps each heading with desired width to each column */}
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  style={{ width }}
                  onClick={() => {
                    sortingHandler(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
{/* pushes the users into tablebody */}
        <TableBody users={users} />
      </table>
    </div>
  );
}

export default DataTable;
