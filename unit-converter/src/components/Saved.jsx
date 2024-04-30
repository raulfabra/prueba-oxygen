import { useEffect, useState } from 'react'

export function Saved ({ like }) {
  const [records, setRecords] = useState([])

  useEffect(() => {
    if (like.q === undefined) return

    const newRecord = (<p>{like.q}{like.u}<span> → </span>{like.r}{like.ut}</p>)

    setRecords([...records, newRecord])
  }, [like])
  return (
    <article className='conversionHistory'>
      {records.length > 0 && records.map((record, index) => (
        <div className='container' key={index}>
          {record}
        </div>
      ))}
    </article>
  )
}
