"use client"
import DataGridApprover from "@/components/newMolecules/DGApprover"
import DataGridEmailApprover from "@/components/newMolecules/DGEmail";
import { useState } from "react";
const AdminPage = ()=>{
  let [item,setItem] = useState(1);
  
  return (
<>
<button onClick={()=>{setItem(1)}} style={{marginLeft:100,marginBottom:50}}> Approve Image</button>

<button onClick={()=>{setItem(0)}}style={{marginLeft:100,marginBottom:50}}> Email Handler</button>
<br />
{/* <hr /> */}

    {item ? <DataGridApprover/> : <DataGridEmailApprover/>}
</>
  )
}

export default AdminPage;