"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "@/lib/firebase";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DGImage from "@/components/newMolecules/DGImage";
import style from "./index.module.css"
import Desc from "@/components/newMolecules/DGDescription";
const columns = [
  {
    field: "Image",
    headerName: "Image",
    width: 150,
    height:300,

    headerClassName:style.header,
    renderCell: (params) => (
      <DGImage data={params.value}></DGImage>
    ),
  },

  { field: "ProductName",
    headerName: "Donated Item", 
    width: 150 ,
    renderCell:(params)=>(
      <Desc data={params.value}></Desc>
    )
    
  },
 
  {
    field: "Description",
    headerName: "Description",
    width: 250,
    renderCell:(params)=>(
      <p style={{marginTop:50}}>{params.value}</p>
    )
  },
  {
    field: "Location",
    headerName: "Location",
    width: 200,

    renderCell:(params)=>(
      <p style={{marginLeft:20,marginTop:50}}>{params.value}</p>
    )
  },
  {
    field: "DonorInfo",
    headerName: "Donor Info",
    width: 250,
    renderCell:(params)=>(

      <div style={{display:"flex",marginTop:30,flexDirection:"column"}}>
      <p style={{marginLeft:20,marginTop:50,marginBlockEnd:0,marginBlockStart:0}}>{params.value?.name}</p>
      <p style={{marginLeft:20,marginTop:50,marginBlockEnd:0,marginBlockStart:20}}>{params.value?.mail}</p>
      </div>
    )
  },
  {
    field: "Phone",
    headerName: "Phone No",
    width: 150,
    
    renderCell:(params)=>(
      <div>

      <p style={{marginLeft:20,marginTop:50,marginBlockEnd:0,marginBlockStart:50}}>{params.value}</p>
      </div>
    )
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "Reviewer",
    headerName: "Reviewer",
    width: 150,
  },
];


export default function DataGridDemo() {
  const [rows,setRows] = useState({})
  useEffect(() => {
    const fetcher = async () => {
      let data = await fetchData();
      console.log(data);
        let rowValues =  data.map(e=>{

        let value = {
            "id":e.id,
            "Image":e.imageUrl,
            "ProductName":{
            "name":  e.productName,
            "desc":  e.description,
            "date": e.date
            },
            "Description":e.description,
            "Location":e.location,
            "DonorInfo":{
              "name":e.name,
              "mail":e.email

            },
            "Phone":e.phone
        }
        return value;
      })
      setRows(rowValues)
    };
    fetcher();
  }, []);

  return (
    <div className={style.dataGrid}>

    <Box sx={{ height: 660, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              },
              },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              rowHeight={100}
              />
    </Box>
              </div>
  );
}
