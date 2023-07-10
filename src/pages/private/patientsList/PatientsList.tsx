import { PaginatedItems } from '../../../pagination/PatientsPager'
//icons
import { AiOutlineFilter , AiOutlineDownload , AiOutlineSearch } from "react-icons/ai";

export const PatientsList = () => {
  return (
    <section className='h-full overflow-y-auto w-full p-2 space-y-4 flex flex-col'>
      {/* TITLE */}
      <h1 className='font-bold text-xl hidden lg:block' >Patients list</h1>
      {/* SEARCH_FILTER_DOWNLOAD_BAR */}
      <div className='flex space-x-2'>
        {/* SEARCH */}
        <div className='flex items-center p-2 space-x-2 rounded-lg border border-[#DFE8F6] xl:w-[65%] w-[70%]'>
          <AiOutlineSearch  className='text-[#848FAC] w-fit cursor-pointer'/>
          <input type="text" placeholder='Search for patient' className='bg-transparent outline-none transition-all placeholder:text-[#848FAC] w-[80%]'/>
        </div>

        {/* DOWNLOAD */}
        <div className='bg-[#EFF3FA] flex items-center justify-center space-x-2 rounded-lg p-2 xl:w-[20%] w-[15%] cursor-pointer'>
          <AiOutlineDownload className='text-[#192252]' />
          <p className='hidden xl:block text-xs text-[#192252]'>Download Report</p>
        </div>

        {/* FILTER */}
        <div className='bg-[#EFF3FA] flex items-center justify-center space-x-2 rounded-lg p-2 w-[15%] cursor-pointer'>
          <AiOutlineFilter className='text-[#192252]' />
          <p className='hidden xl:block text-xs text-[#192252]'>Filter</p>
        </div>
        
      </div>
      {/* PAGINATION */}
      <PaginatedItems itemsPerPage={6}/>
    </section>
    )
}
