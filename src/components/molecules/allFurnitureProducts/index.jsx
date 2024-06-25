// import style from "./index.module.css";
// import { fetchData } from "../../../lib/firebase/index";
// import FurnitureComp from "../furnitureComp";
// const AllFurnitureProducts = ({ data }) => {
//   return (
//     <div className={style.mains}>
//       {data.map((e, key) => {
//           //console.log(e);
//         if (e.status === "showOnPage"){

//             return (
//                 <FurnitureComp
//                 unqId = {e.id}
//                 key={key}
//                 Img={e?.imageUrl}
//                 name={e.productName}
//                 desc={e.description}
//                 location={e.location}
//                 date={e.date}
//                 ></FurnitureComp>
//                 );
//             }
//           })}
//           {data.length ==0 && <h1 style={{height:"50vh"}} className={style.heading}>Furniture at this location will be available soon</h1>}
//     </div>
//   );
// };

// export default AllFurnitureProducts;

import { useState } from "react";
import { Pagination } from "@mui/material";
import style from "./index.module.css";
import FurnitureComp from "../furnitureComp";

const ITEMS_PER_PAGE = 10;

const AllFurnitureProducts = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = data.filter(e => e.status === "showOnPage");

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Calculate the start and end indices of the items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className={style.mains}>
        {currentData.map((e, key) => {
            return (
              <FurnitureComp
                unqId={e.id}
                key={key}
                Img={e?.imageUrl}
                name={e.productName}
                desc={e.description}
                location={e.location}
                date={e.date}
              />
            );
        })}
        {currentData.length === 0 && (
          <h1 style={{ height: "50vh" }} className={style.heading}>
            Furniture at this location will be available soon
          </h1>
        )}

        {/* Pagination controls */}
      </div>

      <div className={style.pagination}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </>
  );
};

export default AllFurnitureProducts;
