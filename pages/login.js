import React from "react";
import Header from '../components/header'
import {Row, Col} from 'react-bootstrap'
import { Form, Input, Button, Checkbox } from 'antd';

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
        <Header />
        <div className="relative black">
        <img className='bubble-down' src="/encx-bubble1.png"/>
        <img className='bubble-up' src="/encx-bubble2.png"/>
            <div className="container flex">
                <img className='register-logo' src="/logo.png"/>
                <div className="register-section">
                    <h1>Sign into your account</h1>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 12 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 16 }}>
                            <Button htmlType="submit">
                                 Continue
                            </Button>
                        </Form.Item>

                        <Form.Item className="registration-part">
                        <div className="desc">Don't have an account?</div>
                        <a href="/register"><div className="join">Join now!</div></a>
                        </Form.Item>

                        </Form>


                </div>
            </div>
        </div>
        </>
    )
}