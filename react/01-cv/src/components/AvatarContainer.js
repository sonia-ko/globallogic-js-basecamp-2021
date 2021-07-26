import avatar from './../imgs/avatar.png';  

function AvatarContainer() {
    return(
        <div className="avatar-container">
        <img className="avatar" src={avatar} alt="" />
      </div>
    )
}

export default AvatarContainer;