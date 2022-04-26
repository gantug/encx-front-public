import React from "react";
import Header from '../components/header'
import {Row, Col} from 'react-bootstrap'
import { Form, Input, Button, Checkbox } from 'antd';

export default function Register() {
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
                    <h1>Create your account</h1>
                    <p>Be one of us!</p>
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
                            <Input placeholder="Username"/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="Fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input placeholder="Full name"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="confirm-password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Confirm password" />
                        </Form.Item>


                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 12 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 16 }}>
                            <Button htmlType="submit">
                                 <a href="/logged">Continue</a>
                            </Button>
                        </Form.Item>

                        <Form.Item className="registration-part" >
                            <Checkbox>I accept the <a>Terms of Service</a> and the <a>Privacy Policy</a></Checkbox>
                        </Form.Item >
                            
                        </Form>


                </div>
            </div>
        </div>
        </>
    )
}