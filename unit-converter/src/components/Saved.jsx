import { useEffect, useState } from 'react'
import { iconCross } from '../assets/icons'

export function Saved ({ e }) {
  const [records, setRecords] = useState(() => {
    const recordsFromStorage = window.localStorage.getItem('records')
    if (recordsFromStorage) return JSON.parse(recordsFromStorage)
    else return []
  })

  const handleDelete = (e) => {
    const div = e.target.closest('div')
    const { index } = div.dataset
    const newRecords = [...records]
    newRecords.splice(index, 1)
    setRecords([...newRecords])
    window.localStorage.setItem('records', JSON.stringify([...newRecords]))
  }

  useEffect(() => {
    if (e.quantity === undefined) return
    if (records.length === 8) return

    const id = records.length + 1
    const newRecord = {
      id,
      quantity: e.quantity,
      firstUnity: e.unity,
      result: e.result,
      secondUnity: e.unityTransform
    }

    setRecords([...records, newRecord])
    window.localStorage.setItem('records', JSON.stringify([...records, newRecord]))
  }, [e])

  return (
    <section>
      <h4>saved</h4>
      <article className='conversionHistory'>
        {records.length > 0 && records.map((record, index) => (
          <div className='container' key={record.id} data-index={index}>
            <p>{record.quantity} {record.firstUnity}<span> → </span>{record.result} {record.secondUnity}</p>
            <button onClick={handleDelete}>{iconCross()}</button>
          </div>
        ))}
      </article>
    </section>
  )
}
