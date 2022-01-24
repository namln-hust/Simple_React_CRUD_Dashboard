import React, { useState } from 'react';
import { Modal } from 'antd';

export default function VillageModal({
	modalVisible,
	handleSubmit,
	hideModal,
	villageObject
}) {
    const emptyVillageInfo = { name: '' }

	const [confirmLoading, setConfirmLoading] = useState(false);
	const [village, setVillage] = useState(villageObject || emptyVillageInfo);

	const handleOk = async () => {
		setConfirmLoading(true);
		const result = await handleSubmit(village);
        console.log(result);
		setConfirmLoading(false);
		hideModal();
	};

	const handleCancel = () => {
		hideModal();
	};

	const handleNameInput = (e) => {
		setVillage({ ...village, name: e.target.value });
	};

	return (
		<Modal
			title="Title"
			visible={modalVisible}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
		>
			<form action={handleOk}>
				<input
					type="text"
					value={village.name}
					onInput={handleNameInput}
				/>
			</form>
		</Modal>
	);
}
