import React from 'react'

export function BuyCards(props) {
  return (
    <div>
      <div>
                
                <div className="card card border-light mb-3  text-bg-success mb-3  "  style={{ width: "18rem" ,height:"365px",color:"brown",backgroundColor:"green", }}>
                   
                    <div className="card-body">
                        <h5 className="card-title" >Place :{props.place}</h5>
                        <h5 className="card-title">Area :{props.area}</h5>
                        <h5 className="card-title">Shape :{props.shape}</h5>
                        <h5 className="card-title">Cost:{props.cost}</h5>
                        <h5 className="card-title">Rating :{props.rating}</h5>
                        <div className="button ">
                        <a href="/" target="_blank" className="btn btn-sm btn-primary">{props.place}</a>
                        </div>
                    </div> </div>
                

            </div>
    </div>
  )
}
