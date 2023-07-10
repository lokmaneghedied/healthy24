import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
//redux
import { useAppSelector  } from '../app/hooks'
//styling
import './../../src/pages/private/patientsList/patientsList.css'
//react-router
import { NavLink } from "react-router-dom"

function Items({ currentItems } : any) {
  
  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item : any)=>(
          // PATIENT_CONTAINER
            <div key={item.id} className='w-full rounded-lg border border-[#DFE8F6] divide-y divide-[#DFE8F6] px-4 py-2'>
                {/* NAME + ADDRESS + PICTURE */}
                <div>
                  <img className='w-[50px] h-[50px]' src={item.picture} alt="patient_picture" />
                  <h1 className='text-[#192252] py-1 font-semibold'>{item.fullName}</h1>
                  <p className='text-[#848FAC] py-1'>{item.address}</p>
                </div>

                {/* WEIGHT + BLOOD */}
                <div className='flex justify-between w-full'>
                  <span>
                    <p className='text-[#848FAC] py-1'>Weight</p>
                    <p className='text-[#848FAC] py-1'>Blood Pressure</p>
                    <p className='text-[#848FAC] py-1'>Blood Glucose</p>
                  </span>
                  <span>
                    <p className='text-[#192252] py-1'>{item.weight}</p>
                    <p className='text-[#192252] py-1'>{item.bloodPressure}</p>
                    <p className='text-[#192252] py-1'>{item.BloodGlucose}</p>
                  </span>
                </div>

                {/* VIEW DETAILS BTN */}
                <div className='bg-[#103F74] text-white p-3 rounded-lg w-full text-center'>
                  <NavLink 
                    to={`${item.id}`}
                    >View detail patient
                  </NavLink>
                </div>
            </div>
        ))}
    </div>
  );
}

export function PaginatedItems({ itemsPerPage }:any) {
 
  const [itemOffset, setItemOffset] = useState(0);
  
  const items = useAppSelector((state)=>state.patients)
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="......"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName='pagination-active'
        className='pagination'
      />
    </>
  );
}
