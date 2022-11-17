import React from "react"
import ContentLoader from "react-content-loader"

const MapSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1170}
    height={600}
    viewBox="0 0 1128 600"
    backgroundColor="#dbdbdb"
    foregroundColor="#000000"
    {...props}
  >
    <rect x="-35" y="-39" rx="0" ry="0" width="1170" height="700" />
  </ContentLoader>
)

export default MapSkeleton