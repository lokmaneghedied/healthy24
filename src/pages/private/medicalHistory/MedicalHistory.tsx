import { PaginatedItems } from '../../../pagination/Pager'

export const MedicalHistory = () => {
  return (
    <section className="medical-history-page">
      <h1 className="medical-history-page-title">Medical History</h1>
      {/* LIST */}
      <PaginatedItems itemsPerPage={7}/>
    </section>
  )
}
