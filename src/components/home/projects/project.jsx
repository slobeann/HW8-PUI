import React, { useState } from "react"
import { Link } from "gatsby"

function project({ image, title, description, number, tags }) {
  return (
    <Link
      to="/asian-paints"
      className="block mb-24 last:mb-0 flex flex-col lg:flex-row"
    >
      <div className="flex flex-col mb-4 lg:mb-0 lg:items-end lg:w-2/12">
        <span className="h2 lg:text-8xl text-gray-number">{number}</span>
        <div className="flex flex-col lg:items-end lg:pr-2">
          {tags.map(tag => {
            return <span className="p-xs">{tag}</span>
          })}
        </div>
      </div>
      {React.cloneElement(image, {
        alt: title,
        className:
          "md:w-1/2 lg:w-5/12 lg:ml-12 lg:mr-8 flex-shrink-0 mb-4 lg:mb-0",
      })}
      <div className="self-center flex flex-col mr-auto">
        <h3 className="relative lg:-left-20 h-stripe mr-auto">{title}</h3>
        <p1>{description}</p1>
      </div>
    </Link>
  )
}

export default project
