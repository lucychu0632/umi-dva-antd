import styles from './index.less';
import Logo from './components/Logo';
import MenuLayout from './components/Menu';
import { Layout, Menu, Icon } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

const BasicLayout=(props)=> {
  return (
    <Layout className={styles.normal}>
      <Header className={styles.header}>
        <Logo width='100px'/>
      </Header>
      <Layout>
        <Sider theme={'light'}><MenuLayout/></Sider>
        <Content>{props.children}</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default BasicLayout;
