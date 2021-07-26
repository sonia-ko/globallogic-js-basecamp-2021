
function ProjectImgLeft(props){
return (
    <div className={props.classes}>
      <div className="text">
        <h3>{props.title}</h3>
        <p>
          {props.text}
        </p>
      </div>

      <div className="img-container">
        <img className="section-img" src={props.picture} alt="" />
      </div>
    </div>
)
}

export default ProjectImgLeft