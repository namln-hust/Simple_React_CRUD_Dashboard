import React, { useState } from 'react';
import { Modal } from 'antd';

export default function VillageModal({
	modalVisible,
	handleSubmit,
	hideModal,
	village,
	handleVillageChange,
	reloadData
}) {
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		setConfirmLoading(true);
		const result = await handleSubmit();
		if (result.success) hideModal();
		else alert(result.err);
		setConfirmLoading(false);
		reloadData();
	};

	const handleCancel = () => {
		hideModal();
	};

	const handleNameInput = (e) => {
		handleVillageChange({ ...village, name: e.target.value });
	};

	return (
		<Modal
			title="Title"
			visible={modalVisible}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			animation={false}
		>
			<form>
				<input
					type="text"
					value={village ? village.name : ''}
					onInput={handleNameInput}
				/>
			</form>
		</Modal>
	);
}
