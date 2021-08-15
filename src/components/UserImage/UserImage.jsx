import './user-image.css'
const UserImage = ({imgContainerClass,imgSrc,imgAlt}) => {
    return (
        <div className={`user__img ${imgContainerClass}`}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
    )
}

export default UserImage
