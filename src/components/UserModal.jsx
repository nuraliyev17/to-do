import React from 'react';
import { Modal, Form, Input } from 'antd';

const UserModal = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm(); 

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onCreate(values);
            })
            .catch((info) => {
                console.log('Xatolik:', info);
            });
    };

    return (
        <Modal
            open={visible}
            title="Yangi foydalanuvchi qo'shish"
            okText="Qo'shish"
            cancelText="Bekor qilish"
            onCancel={onCancel}
            onOk={handleOk}
        >
            <Form form={form} layout="vertical" name="user_form">
                <Form.Item
                    name="name"
                    label="Ism"
                    rules={[{ required: true, message: 'Iltimos, ism kiriting!' }]}
                >
                    <Input placeholder="Ism..." />
                </Form.Item>
                <Form.Item
                    name="job"
                    label="Kasbi"
                    rules={[{ required: true, message: 'Iltimos, kasbini kiriting!' }]}
                >
                    <Input placeholder="Developer..." />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserModal;
