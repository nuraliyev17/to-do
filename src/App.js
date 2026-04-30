import React, { useState, useEffect } from 'react';
import { Layout, Table, Button, Popconfirm } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import UserModal from './components/UserModal';
import { showMessage } from './utils/message';

const { Header, Content, Sider } = Layout;
const API_URL = "http://localhost:5000/users"; 

function App() {
  const [users, setUsers] = useState([]);  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      showMessage('error', 'Serverdan ma\'lumot olib bo\'lmadi');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (values) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),  
      });
      
      if (res.ok) {
        fetchUsers();  
        setIsModalVisible(false);
        showMessage('success', 'Foydalanuvchi qo\'shildi!');
      }
    } catch (error) {
      showMessage('error', 'Xatolik yuz berdi');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setUsers(users.filter((u) => u.id !== id));
        showMessage('warning', 'Foydalanuvchi o\'chirildi');
      }
    } catch (error) {
      showMessage('error', 'O\'chirishda xatolik');
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Ism', dataIndex: 'name', key: 'name' },
    { title: 'Kasbi', dataIndex: 'job', key: 'job' },
    {
      title: 'Amallar',
      key: 'action',
      render: (_, record) => (
        <Popconfirm title="O'chirilsinmi?" onConfirm={() => handleDelete(record.id)}>
          <Button icon={<DeleteOutlined />} danger size="small"> </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <div style={{ color: 'white', textAlign: 'center' }}>Menu qismi</div>
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Foydalanuvchilar</h2>
          
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={() => setIsModalVisible(true)}
          >
            Yangi user qo'shish
          </Button>
        </Header>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', borderRadius: 8 }}>
          <Table 
            dataSource={users} 
            columns={columns} 
            rowKey="id" 
            loading={loading} 
          />
          <UserModal
            visible={isModalVisible}
            onCreate={handleAdd}  
            onCancel={() => setIsModalVisible(false)}
          />
        </Content>
      </Layout>
    </Layout>
  );

}

export default App;
