import React from 'react';
import {
  EuiCard,
  EuiIcon,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiFieldPassword,
} from '@elastic/eui';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';

const Login = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <EuiCard title="登录" description="" icon={<EuiIcon type="user" />}>
            <EuiForm>
              <EuiFormRow label="用户名">
                <EuiFieldText></EuiFieldText>
              </EuiFormRow>
              <EuiFormRow label="密码">
                <EuiFieldPassword></EuiFieldPassword>
              </EuiFormRow>
              <EuiFormRow>
                <EuiButton
                  onClick={() => history.push('/admin')}
                  fullWidth
                  fill
                  size="s"
                >
                  登录
                </EuiButton>
              </EuiFormRow>
            </EuiForm>
          </EuiCard>
        </div>
      </div>
    </>
  );
};

export default Login;
