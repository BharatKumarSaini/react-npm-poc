import React, { useState, useEffect } from 'react';
import { Table, Divider} from 'antd';
import { User , Address} from './types';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (address: Address) => `${address.street}, ${address.city}`,
  },
  {
    title: 'Company',
    key: 'company',
    dataIndex: 'company',
    render: (company: { name: string }) => company.name,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: User) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const TableMain: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    // Fetch the data from the given URL
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: User[]) => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default TableMain;
