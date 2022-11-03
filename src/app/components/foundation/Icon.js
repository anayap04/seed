import React, { useMemo } from "react";
import Edit from "../../../assets/imgs/svg/Edit"
import Location from "../../../assets/imgs/svg/Location"

const Components = { 
  Edit: Edit,
  Location: Location,
}

const Icon = props => {
  const {size, tintColor, iconName} = props
  const Component = useMemo(() => {
    return Components[iconName]
  }, [iconName])

  return <Component width={size} height={size} fill={tintColor} />
}

export default Icon;