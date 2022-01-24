import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import VillageModal from '../components/VillageModal';
import '../assets/styles/pages/VillagePage.css';

export default function VillagePage() {
	const [villages, setVillages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [visible, setVisible] = useState(false);
	const [village, setVillage] = useState();
	const [isEdit, setIsEdit] = useState(true);

	const hideModal = () => {
		setVisible(false);
	};

	const fetchVillages = async function () {
		setLoading(true);
		await fetch(
			'https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages'
		)
			.then((response) => response.json())
			.then((data) => {
				setVillages(
					data.map((record) => ({
						...record,
						key: record.id
					}))
				);
				setLoading(false);
			});
	};

	const createVillage = async () => {
		let result = { success: false };

		await fetch(
			`https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(village)
			}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data) result.success = true;
			})
			.catch((err) => {
				console.log(err);
				result.success = false;
				result.err = err;
			});

		return result;
	};

	const updateVillage = async () => {
		let result = { success: false };

		await fetch(
			`https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages/${village.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(village)
			}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data) result.success = true;
			})
			.catch((err) => {
				console.log(err);
				result.success = false;
				result.err = err;
			});

		return result;
	};

	const deleteVillage = async (id) => {
		await fetch(
			`https://61ec37adf3011500174d2111.mockapi.io/api/v1/villages/${id}`,
			{
				method: 'DELETE'
			}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					fetchVillages();
				}
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	const handleSubmit = () => {
		if (isEdit) {
			return updateVillage();
		} else {
			return createVillage();
		}
	};

	const handleVillageChange = (village) => {
		setVillage(village);
	};

	const showCreateForm = () => {
		setVillage();
		setIsEdit(false);
		setVisible(true);
	};

	const showUpdateForm = (village) => {
		setVillage(village);
		setIsEdit(true);
		setVisible(true);
	};

	useEffect(() => {
		fetchVillages();
	}, []);

	const columns = [
		{
			title: '#',
			dataIndex: 'index',
			key: 'index',
			render: (text, record, index) => villages.indexOf(record) + 1
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'index'
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<Button
						type="primary"
						onClick={() => showUpdateForm(record)}
					>
						Edit
					</Button>
					<Button
						type="danger"
						onClick={() => deleteVillage(record.id)}
					>
						Delete
					</Button>
				</Space>
			)
		}
	];

	return (
		<>
			{loading ? (
				<div className="loading-spinner">
					<Spin tip="Loading..."></Spin>
				</div>
			) : (
				<>
					<div className="btn-add">
						<Button
							onClick={showCreateForm}
							type="primary"
							icon={<PlusOutlined />}
						>
							Add Village
						</Button>
					</div>
					<Table columns={columns} dataSource={villages}></Table>
				</>
			)}
			<VillageModal
				modalVisible={visible}
				hideModal={hideModal}
				handleSubmit={handleSubmit}
				village={village}
				handleVillageChange={handleVillageChange}
				reloadData={fetchVillages}
			/>
		</>
	);
}
