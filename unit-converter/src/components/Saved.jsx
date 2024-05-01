import { useEffect, useState } from 'react'
import { iconCross } from '../assets/icons'
import { getHistoryValue } from '../logic/logic'

export function Saved ({ itemObject }) {
  const [records, setRecords] = useState(getHistoryValue())

  useEffect(() => {
    if (itemObject.quantity === undefined) return
    if (records.length === 8) return

    const id = records.length + 1
    const newRecord = {
      id,
      quantity: itemObject.quantity,
      firstUnity: itemObject.unity,
      result: itemObject.result,
      secondUnity: itemObject.unityTransform
    }

    setRecords([...records, newRecord])
    window.localStorage.setItem('records', JSON.stringify([...records, newRecord]))
  }, [itemObject])

  const handleDelete = (event) => {
    const dataDeleted = event.target.closest('div')
    const { index } = dataDeleted.dataset
    const newRecords = [...records]
    newRecords.splice(index, 1)
    setRecords([...newRecords])
    window.localStorage.setItem('records', JSON.stringify([...newRecords]))
  }

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
