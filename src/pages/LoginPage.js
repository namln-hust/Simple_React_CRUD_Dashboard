import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../assets/styles/pages/LoginPage.css';

export default function LoginPage() {
	const navigate = useNavigate();

	const onFinish = (values) => {
		// Check login info

		// Redirect to home page
		navigate('/home/village');
	};

	return (
		<div className="LoginPage">
			<div className="wrapper">
				<div className="title">Login</div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!'
							}
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!'
							}
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
