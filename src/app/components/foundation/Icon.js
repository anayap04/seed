import React, { useMemo } from "react";
import Edit from "../../../assets/imgs/svg/Edit"
import Instagram from "../../../assets/imgs/svg/Instagram"
import Linkedin from "../../../assets/imgs/svg/Linkedin"
import Location from "../../../assets/imgs/svg/Location"
import Twitter from "../../../assets/imgs/svg/Twitter"

const Components = { 
  Edit: Edit,
  Instagram: Instagram,
  Linkedin: Linkedin,
  Location: Location,
  Twitter: Twitter,
}

const Icon = props => {
  const {size, tintColor, iconName} = props
  const Component = useMemo(() => {
    return Components[iconName]
  }, [iconName])

  return <Component width={size} height={size} fill={tintColor} />
}

export default Icon;