import { Button, Form, Input, Space, Table, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../api/api";
export default function Login() {
    const [form] = useForm()
    const navigate = useNavigate();
    const location = useLocation();
    const submit = (e: any) => {

        login(e).then(res => {
            if (res.data.status == 0) {
                message.success('登录成功')
                sessionStorage.setItem('user', 'admin');
                navigate((location.state?.from?.pathname || '/') + (location.search || ''), { state: { ...(location.state || {}) } });
            } else {
                message.error('登录失败')
            }
        })
    }
    useEffect(() => {
        //模拟登录成功
        //sessionStorage.setItem('user', 'admin')
        //跳转至RequireAuth拦截的目标页面

        //navigate((location.state?.from?.pathname || '/') + (location.search || ''), { state: { ...(location.state || {}) } });
    }, []);


    return (
        <>
            <Form
                form={form}
                onFinish={submit}>
                <Form.Item
                    name={'username'}
                    label='UserName'
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    label='Password'
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form></>
    )
}