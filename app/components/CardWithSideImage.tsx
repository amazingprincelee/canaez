import React from 'react'


const CardWithSideImage = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="/images/consultants-768x512.jpg"
      alt="About image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">World class engineering service</h2>
    <p> Canaez Nigeria Limited is a world-class engineering service provider dedicated to technical leadership,
    consistency, integrity, and capacity building through a continual improvement approach.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Read more</button>
    </div> */}
  </div>
</div>
</div> 
  )
}

export default CardWithSideImage