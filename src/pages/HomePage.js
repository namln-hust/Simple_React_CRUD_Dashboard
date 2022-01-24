import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import VillagePage from './VillagePage';
import ShinobiPage from './ShinobiPage';
import JutsuPage from './JutsuPage';
import '../assets/styles/pages/HomePage.css';

const { Header, Content, Footer } = Layout;

export default function HomePage() {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
				>
					<Menu.Item key="1">
                        <Link to="./village">Villages</Link>
                    </Menu.Item>
					<Menu.Item key="2">
                        <Link to="./shinobi">Shinobis</Link>
                    </Menu.Item>
					<Menu.Item key="3">
                        <Link to="./jutsu">Jutsus</Link>
                    </Menu.Item>
				</Menu>
			</Header>
			<Content
				className="site-layout"
				style={{ padding: '0 50px', marginTop: 64, marginBottom: 20 }}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, marginTop: 24, minHeight: 380 }}
				>
					<Routes>
                        <Route path="/village" element={<VillagePage />}/>
                        <Route path="/shinobi" element={<ShinobiPage />}/>
                        <Route path="/jutsu" element={<JutsuPage />}/>
                    </Routes>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				©Nam Le Nhat - 2021
			</Footer>
		</Layout>
	);
}
