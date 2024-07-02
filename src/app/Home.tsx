import { Card } from "antd";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
export default function Home() {
    const items: any = [

        {
            key: 'g1',
            label: 'Item 1',
            type: 'group',
            children: [
                {
                    key: '1', label: <Link to={'info'}>info</Link>
                },
                {
                    key: '2', label: <Link to={'table'}>table</Link>
                }, {
                    key: '3', label: <Link to={'counter'}>counter</Link>
                },
            ],
        },
        {
            key: 'g2',
            label: 'Item 2',
            type: 'group',
            children: [
                { key: '3', label: 'Option 3' },
                { key: '4', label: 'Option 4' },
            ],
        },

    ]
    return (<>
        <Layout>
            <Header><Link to={'info'}>info</Link></Header>
            <Layout style={{ height: 800 }}>
                <Sider style={{ background: 'gray' }} width="15%" >
                    <Menu
                        style={{}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Content >
                    <Outlet></Outlet>
                </Content>
            </Layout>

        </Layout>

    </>
    )
}