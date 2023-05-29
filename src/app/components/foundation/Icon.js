import React, { useMemo } from 'react';
import ArrowDown from '../../../assets/imgs/svg/ArrowDown';
import ArrowRight from '../../../assets/imgs/svg/ArrowRight';
import Account from '../../../assets/imgs/svg/Account';
import Check from '../../../assets/imgs/svg/Check';
import Grow from '../../../assets/imgs/svg/Grow';
import Edit from '../../../assets/imgs/svg/Edit';
import Impediment from '../../../assets/imgs/svg/Impediment';
import Instagram from '../../../assets/imgs/svg/Instagram';
import Inevestment from '../../../assets/imgs/svg/Inevestment';
import Language from '../../../assets/imgs/svg/Language';
import Linkedin from '../../../assets/imgs/svg/Linkedin';
import Location from '../../../assets/imgs/svg/Location';
import Look from '../../../assets/imgs/svg/Look';
import Money from '../../../assets/imgs/svg/Money';
import Search from '../../../assets/imgs/svg/Search';
import Semicircle from '../../../assets/imgs/svg/Semicircle';
import SwitchMode from '../../../assets/imgs/svg/SwitchMode';
import Transport from '../../../assets/imgs/svg/Transport';
import Twitter from '../../../assets/imgs/svg/Twitter';
import User from '../../../assets/imgs/svg/User';

const Components = {
  ArrowDown,
  ArrowRight,
  Account,
  Check,
  Grow,
  Edit,
  Impediment,
  Instagram,
  Inevestment,
  Language,
  Linkedin,
  Location: Location,
  Look,
  Money: Money,
  Search: Search,
  Semicircle,
  SwitchMode,
  Transport,
  Twitter: Twitter,
  User: User
};

const Icon = (props) => {
  const { size = 20, tintColor = 'black', iconName = 'Grow' } = props;

  const Component = useMemo(() => {
    return Components[iconName];
  }, [iconName]);

  return <Component width={size} height={size} fill={tintColor} />;
};

export default Icon;
