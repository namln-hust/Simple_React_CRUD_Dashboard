import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin } from 'antd';
import VillageModal from '../components/VillageModal';

export default function VillagePage() {
	const columns = [
		{
			title: '#',
			dataIndex: 'id',
			key: 'id'
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<Button type="primary" onClick={showModal}>
						Edit
					</Button>
					<div>Delete</div>
				</Space>
			)
		}
	];

	const [villages, setVillages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [visible, setVisible] = useState(false);

	const showModal = () => {
		setVisible(true);
	};

	const hideModal = () => {
		setVisible(false);
	};

	const handleSubmit = async (village) => {
		let result = false;

		await fetch(
			'https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages'
		)
			.then((response) => response.json())
			.then((data) => {
				result = true;
			});

		return result;
	};

	const fetchVillages = async function () {
		setLoading(true);
		await fetch(
			'https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages'
		)
			.then((response) => response.json())
			.then((data) => {
				setVillages(data);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchVillages();
	}, []);

	return (
		<>
			{loading && (
				<div className="loading-spinner">
					<Spin tip="Loading..."></Spin>
				</div>
			)}
			{!loading && <Table columns={columns} dataSource={villages} />}
			<VillageModal
				modalVisible={visible}
				hideModal={hideModal}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}
