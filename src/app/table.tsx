import { Table } from "antd";

export default function DataTable() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
            sorter: (a: any, b: any) => a.ID - b.ID,
            width: 80,
            render: (_: any, record: { ID: any; }) => {
                return 'IP' + record.ID.toString().padStart(5, '0')
            }
        }, {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
            width: 500,
            sorter: (a: any, b: any) => a['Title'] > b['Title'] ? 1 : -1,
        }, {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
            sorter: (a: any, b: any) => a['Category'] > b['Category'] ? 1 : -1,
            width: 150,
        }, {
            title: 'Entity',
            dataIndex: 'Entity',
            key: 'Entity',
            sorter: (a: any, b: any) => a['Entity'] > b['Entity'] ? 1 : -1,
            width: 100,
        }, {
            title: 'Owner',
            dataIndex: 'Owner',
            key: 'Owner',
            sorter: (a: any, b: any) => a['Owner'] > b['Owner'] ? 1 : -1,
            width: 100,
        }, {
            title: 'Function',
            dataIndex: 'Function',
            key: 'Function',
            width: 200,
            sorter: (a: any, b: any) => a['Function'] > b['Function'] ? 1 : -1,
        }, {
            title: 'Process',
            dataIndex: 'Process',
            key: 'Process',
            sorter: (a: any, b: any) => a['Process'] > b['Process'] ? 1 : -1,
            width: 150,
        }, {
            title: '',
            key: 'action',
            width: 100,

        }
    ];
    let ws = new WebSocket('ws://192.168.31.189:10002');
    ws.onopen = function () {
        console.log('建立连接')
    }
    ws.onmessage = function (event) {
        console.log(event)
    }
    return (
        <>
            <Table columns={columns}></Table>
        </>
    )
}