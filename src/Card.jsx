import React from 'react';

const Card = (props) => {
  return (
    <div className="col-md-4 mb-5">  
         <div className="card">
            <div className="header text-center"><span>{props.userType}</span>
              <h1>{props.price}/month</h1></div>
            <div className="card-body">
              <ul className="ul-style">
                <li><span>{props.freeRight}{props.plusRight}{props.proRight}</span>{props.one}</li>
                <li><span>{props.freeRight}{props.plusRight}{props.proRight}</span>{props.two}</li>
                <li><span>{props.freeRight}{props.plusRight}{props.proRight}</span>{props.three}</li>
                <li><span>{props.freeRight}{props.plusRight}{props.proRight}</span>{props.four}</li>
                <li className={`${props.free}`} ><span>{props.freeWrong}{props.plusRight}{props.proRight}</span>{props.five}</li>
                <li className={`${props.free}`}><span>{props.freeWrong}{props.plusRight}{props.proRight}</span>{props.six}</li>
                <li className={`${props.free}`}><span>{props.freeWrong}{props.plusRight}{props.proRight}</span>{props.seven}</li>
                <li className={`${props.free} ${props.plus}`}style={{color:`${props.color}`}}><span>{props.freeWrong}{props.plusWrong}{props.proRight}</span>{props.eigth}</li>
              </ul>
              <div className="text-center"><button>BUTTON</button></div>
            </div>
          </div>
          </div>
   
  )
}

export default Card
