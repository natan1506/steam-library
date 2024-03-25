import { useState } from 'react'

import { Card } from '@/components/ui/card'

import listGames from '../../games.json'

export function ListCard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(5)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  return (
    <div className="container flex gap-3">
      {listGames.map((item) => (
        <Card
          key={item.id}
          className="flex w-auto max-w-[186px] flex-col gap-3 p-3"
        >
          <img
            src={`../../public/img/${item.id}.png`}
            alt=""
            className="max-h-60 rounded"
          />
          <span className="text-xl text-muted-foreground">{item.name}</span>
        </Card>
      ))}
    </div>
  )
}
