import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./styles.module.scss"

const UserSkeleton = () => (
  <ContentLoader 
    className={styles.skelet}
    speed={2}
    width={238}
    height={78}
    viewBox="0 0 238 78"    
    backgroundColor="#dbdbdb"
    foregroundColor="#000000"    
  >
    <circle cx="50" cy="38" r="25" /> 
    <rect x="86" y="25" rx="0" ry="0" width="135" height="28" />
  </ContentLoader>
)

export default UserSkeleton;