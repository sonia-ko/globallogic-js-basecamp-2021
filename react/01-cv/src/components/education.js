function Education(props){
    return(<div className="job education">
    <h4>Education</h4>
    
    <div className="job-content">
      <p className="working-duration">{props.duration}</p>
      <p className="job-description">
                {props.description}
      </p>
    </div>
    </div>  
    )}
    
    export default Education;