"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDataBasedOnId } from "@/lib/firebase";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import DGImage from "@/components/newMolecules/DGImage";
import style from "./index.module.css";
import Desc from "@/components/newMolecules/DGDescription";
import Status from "@/components/newMolecules/DGEmailStatus";
import Reviewer from "@/components/newMolecules/DGReviewer";
import { width } from "@mui/system";
import RenderExpandableCell from "../ExpandableCell";
function dateTimeFormateer(timestamp) {
  try {
    const { seconds, nanoseconds } = timestamp;
    const milliseconds = seconds * 1000 + nanoseconds / 1e6;
    const date = new Date(milliseconds);
    const options = { month: "short", day: "numeric", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  } catch {
    const date = new Date();
    const options = { month: "short", day: "numeric", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
}

const columns = [
  {
    field: "Image",
    headerName: "Image",
    width: 100,
    height: 300,

    headerClassName: style.header,
    renderCell: (params) => <DGImage data={params.value}></DGImage>,
  },

  {
    field: "ProductName",
    headerName: "Donated Item",
    width: 150,
    renderCell: (params) => <Desc data={params.value}></Desc>,
  },

  {
    field: "Location",
    headerName: "Location",
    width: 150,

    renderCell: (params) => (
      <p style={{ marginLeft: 20, marginTop: 50 }}>{params.value}</p>
    ),
  },
  {
    field: "DonorInfo",
    headerName: "Donor Info",
    width: 250,
    renderCell: (params) => (
      <div style={{ display: "flex", marginTop: 30, flexDirection: "column" }}>
        <p
          style={{
            marginLeft: 20,
            marginTop: 50,
            marginBlockEnd: 0,
            marginBlockStart: 0,
          }}
        >
          {params.value?.name}
        </p>
        <p
          style={{
            marginLeft: 20,
            marginTop: 50,
            marginBlockEnd: 0,
            marginBlockStart: 20,
          }}
        >
          {params.value?.mail}
        </p>
      </div>
    ),
  },
  {
    field: "Phone",
    headerName: "Phone No",
    width: 150,

    renderCell: (params) => (
      <div>
        <p
          style={{
            marginLeft: 20,
            marginTop: 50,
            marginBlockEnd: 0,
            marginBlockStart: 50,
          }}
        >
          {params.value}
        </p>
      </div>
    ),
  },
  {
    field: "Date",
    headerName: "Date",
    width: 100,
    renderCell: (params) => (
      <p style={{ marginTop: 50, marginLeft: 10 }}>
        {dateTimeFormateer(params.value)}
      </p>
    ),
  },

  {
    field: "Question",
    headerName: "Question",
    width: 150,
    renderCell: (params) => (
      <RenderExpandableCell {...params}></RenderExpandableCell>
    ),
  },

  {
    field: "RequestorInfo",
    headerName: "Requestor Info",
    width: 250,
    renderCell: (params) => (
      <div style={{ display: "flex", marginTop: 30, flexDirection: "column" }}>
        <p
          style={{
            marginLeft: 20,
            marginTop: 50,
            marginBlockEnd: 0,
            marginBlockStart: 0,
          }}
        >
          {params.value?.name}
        </p>
        <p
          style={{
            marginLeft: 20,
            marginTop: 50,
            marginBlockEnd: 0,
            marginBlockStart: 20,
          }}
        >
          {params.value?.mail}
        </p>
      </div>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    width: 220,
    renderCell: (params) => <Status data={params}></Status>,
  },
  {
    field: "Reviewer",
    headerName: "Reviewer",
    width: 350,
    renderCell: (params) => <Reviewer data={params}></Reviewer>,
  },
];

export default function DataGridEmailApprover() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    function sortByTimestamp(data) {
      return data.sort((a, b) => {
        if (a?.client?.date?.seconds === b?.client?.date?.seconds) {
          return b?.client?.date?.nanoseconds - a?.client?.date?.nanoseconds;
        }
        return b?.client?.date?.seconds - a?.client?.date?.seconds;
      });
    }
    const fetcher = async () => {
      let data2 = await fetchDataBasedOnId();
      data2 = sortByTimestamp(data2);
      return data2;
    };

    let FinalRunner = async () => {
      let fetchedData = await fetcher();

      // console.log(fetchedData);
      let finalRow = fetchedData
        .filter((e) => e !== undefined)
        .map((e) => {
          // console.log(e)
          let value = {
            id: e.client.id,
            Image: e.owner.imageUrl,
            ProductName: {
              name: e.owner.productName,
              desc: e.owner.description,
              date: e.owner.date,
            },
            Description: e.owner.description,
            Location: e.owner.location,
            DonorInfo: {
              name: e.owner.name,
              mail: e.owner.email,
            },
            Phone: e.owner.phone,
            Status: {
              status: e.client.status,
              clientEmail: e.client.email,
              donarId: e.client.donarId,
              clientId: e.client.id,
              donarEmail:e.owner.email,
              donarPhone:e.owner.phone,
              productImage:e.owner.imageUrl[0],
              donarName:e.owner.name
            },
            Reviewer: e.owner.location,
            Date: e.client.date,
            Question: e.client.anyQuestions,

            RequestorInfo: {
              name: e.client.name,
              mail: e.client.email,
            },
          };
          return value;
        });
      // console.log(finalRow);
      setRows(finalRow);
    };
    FinalRunner();
  }, []);

  return (
    <div className={style.dataGrid}>
      <Box sx={{ height: 1180, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          rowHeight={100}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}
