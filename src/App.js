import React from "react"
import Card from "./Card";
import travelsData from "./travelsData"
import Header from "./Header"

export default function App() {

  const cardElements = travelsData.map(travel => {
    return <Card
      title={travel.title}
      location={travel.location}
      googleMapsUrl={travel.googleMapsUrl}
      startDate={travel.startDate}
      endDate={travel.endDate}
      description={travel.description}
      imageUrl={travel.imageUrl}
    />

  })
  return (
  <div className="containner">
    <Header />
    <cards>
      {cardElements}
    </cards>
  </div>
  )
}
