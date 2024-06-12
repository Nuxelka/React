import styles from './ProfilePic.module.css'

function ProfilePicture(){
    const imageUrl = 'https://via.placeholder.com/200'

    const handleClick = (e) => {
        e.target.style.opacity = 0 ? e.target.style.opacity = 100 : e.target.style.dispopacitylay = 0;
    }
    return( <>
                <img className={styles.btn} onClick = {(e) => handleClick(e)} src = {imageUrl}></img>
            </>)
}

export default ProfilePicture