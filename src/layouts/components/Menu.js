import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';
import Link from 'umi/link';
// import styles from './menu.less'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
const menuList = [
  {
    id: 1,
    icon: 'laptop',
    name: '通用',
    route: '/app/general',
    sub: [
      {
        parentId: 1,
        id: 2,
        name: '按钮',
        route: '/app/general/button',
      }, {
        id: 3,
        parentId: 1,
        name: '图标',
        route: '/app/general/icon',
      }
    ],
  },
  {
    id: 4,
    icon: 'bars',
    name: '布局',
    route: '/app/layout',
    sub: [
      {
        id: 5,
        parentId: 4,
        name: '栅格',
        route: '/app/layout/layout'
      },
      {
        id: 6,
        parentId: 4,
        name: '布局',
        route: '/app/layout/layout'
      },
    ],
  },
  {
    id: 7,
    name: '导航',
    route: '/app/navigation',
    icon: 'shop',
    sub: [
      {
        id: 8,
        parentId: 7,
        name: '固钉',
        route: '/app/navigation/affix',
      },
      {
        id: 9,
        parentId: 7,
        name: '面包屑',
        route: '/app/navigation/breadcrumb',
      },
      {
        id: 10,
        parentId: 7,
        name: '下拉菜单',
        route: '/app/navigation/dropdown',
      },
      {
        id: 11,
        parentId: 7,
        name: '导航菜单',
        route: '/app/navigation/menu',
      },
      {
        id: 12,
        parentId: 7,
        name: '分页',
        route: '/app/navigation/pagination',
      },
      {
        id: 13,
        parentId: 7,
        name: '步骤条',
        route: '/app/navigation/steps',
      },
    ],
  }
];
let activeId = [];

class MenuLayout extends React.Component {
  state = {
    selectedKeys: [],
    openKeys: [],
  };

  componentDidMount() {
    this.setState({
      selectedKeys: activeId,
      openKeys: activeId,
    });
  }

  handleClick = (item) => {
    this.setState({
      selectedKeys: [item.key],
      openKeys: item.keyPath,
    });
  };
  openClick = (item) => {
    this.setState({
      selectedKeys: item,
      openKeys: item,
    });
  };

  render() {
    const { selectedKeys, openKeys } = this.state;
    const renderMenuList = (menu) => {
      return menu.map((item) => {

        if (location.pathname.indexOf(item.route) >= 0) {
          if (!activeId.includes(String(item.id))) {
            activeId.push(String(item.id));
          }
        }
        if (item.sub) {
          return (
            <SubMenu key={item.id}
                     title={<span>{item.icon ? <Icon type={item.icon}/> : null}<span>{item.name}</span></span>}>
              {
                item.sub ? renderMenuList(item.sub) : null
              }
            </SubMenu>
          );
        } else {
          return (
            <Item key={item.id} id={item.id}>
              <Link to={item.route}><span>{item.name}</span></Link>
            </Item>
          );
        }
      });
    };
    return (
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        onClick={this.handleClick}
        onOpenChange={this.openClick}
      >
        {renderMenuList(menuList)}
      </Menu>
    );
  }
}

MenuLayout.propTypes = {
  collapsed: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default MenuLayout;
