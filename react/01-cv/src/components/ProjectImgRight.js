function ProjectImgRight(props) {
    return (<div className={props.classes}>
      <div className="img-container">
        <img className="section-img" src={props.picture} alt="" />
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>)
}

export default ProjectImgRight;