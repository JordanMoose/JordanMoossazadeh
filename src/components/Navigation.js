// This is the wrapper component for each page, containing the nav header and footer

import React from 'react';
import './Navigation.scss';
import {
	Layout,
	Menu
} from 'antd';
const { Header, Content, Footer } = Layout;

export default (props) => (
	<Layout>
		<Header className='header'>
			<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['Home']}>
        <Menu.Item key='Home'>Home</Menu.Item>
        <Menu.Item key='Projects'>Projects</Menu.Item>
        <Menu.Item key='Resume'>Resume</Menu.Item>
      </Menu>
		</Header>
		<Content className='content'>{props.children}</Content>
		<Footer></Footer>
	</Layout>
)
