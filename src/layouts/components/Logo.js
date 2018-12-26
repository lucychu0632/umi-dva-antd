import React from 'react';
// import MenuList from './Menu';
import Link from 'umi/link';
import styles from '../index.less';
import { commonInfo } from 'utils/config';

const Logo = ({ width }) => {
  return (
      <Link className={styles.logo} to={'/'}><img src={commonInfo.Logo} alt={'logo'} width={width}/></Link>
  );
};

export default Logo;
