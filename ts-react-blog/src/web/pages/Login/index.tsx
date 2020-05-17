import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";
import defaultLogo from "../../assets/images/logo.png";

const LoginForm = withRouter(() => {
  return (
    <Form name="login_form">
      <Form.Item name="username">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <Button>注册</Button>
      </Form.Item>
    </Form>
  );
});
export default class Login extends React.Component {
  render() {
    return (
      <div className="blog-login">
        <div className="blog-login-form">
          <div className="blog-logo-box">
            <img src={defaultLogo} className="logo" />
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}
