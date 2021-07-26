function JobPosition(props){
    return (
        <div className="job-position-block">
        <div className="job-content">
          <p className="job-description">
            <span>{props.position} </span>   -  <span>{props.duration}</span>: {props.description}
          </p>
           
          </div>
          </div>
    )
}

export default JobPosition;