import { useEffect, useState } from 'react'
import { iconCross } from '../assets/icons'

export function Saved ({ e }) {
  const [records, setRecords] = useState([])

  const handleDelete = (e) => {
    const div = e.target.closest('div')
    div.remove()
  }

  useEffect(() => {
    if (e.quantity === undefined) return
    const newRecord = (
      <>
        <p>{e.quantity}{e.unity}<span> → </span>{e.result}{e.unityTransform}</p>
        <button onClick={handleDelete}>{iconCross()}</button>
      </>
    )
    setRecords([...records, newRecord])
  }, [e])

  return (
    <section>
      <h4>saved</h4>
      <article className='conversionHistory'>
        {records.length > 0 && records.map((record, index) => (
          <div className='container' key={index}>
            {record}
          </div>
        ))}
      </article>
    </section>
  )
}
