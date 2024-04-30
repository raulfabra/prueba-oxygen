import { useEffect, useState } from 'react'

export function Saved ({ e }) {
  const [records, setRecords] = useState([])

  useEffect(() => {
    if (e.quantity === undefined) return

    const newRecord = (<p>{e.quantity}{e.unity}<span> → </span>{e.result}{e.unityTransform}</p>)

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
