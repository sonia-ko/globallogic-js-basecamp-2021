function OnePositionJob(props){
return(<div className="job">
<h4>{props.title}</h4>

<div className="job-content">
  <p className="working-duration">{props.duration}</p>
  <p className="job-description">
            {props.description}
  </p>
</div>
</div>  
)}

export default OnePositionJob;