import { PaginatedItems } from '../../../Pager'

export const MedicalHistory = () => {
  return (
    <section className="m-4 w-full">
      <h1 className="font-bold text-lg">Medical History</h1>
      {/* LIST */}
      <PaginatedItems itemsPerPage={7}/>
    </section>
  )
}
