import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiNavDrawerGroup,
  EuiNavDrawer,
  EuiFocusTrap,
  EuiPopover,
  EuiAvatar,
  EuiListGroup,
  EuiListGroupItem,
} from '@elastic/eui';
import { useLocation, useHistory } from 'react-router-dom';

import styles from './index.module.scss';

const Admin = (props: any) => {
  const { route } = props;
  const { routes } = route;
  const location = useLocation();
  const history = useHistory();
  const [isLogoutPopoverOpen, setLogoutPopoverOpen] = useState(false);
  const { pathname } = location;
  const onKeyDown = () => {};
  const onLogout = () => {
    history.replace('/login');
  };

  const menus = routes.map((r: any) => ({
    label: r.label,
    iconType: r.iconType,
    isActive: pathname === r.path,
    onClick: () => {
      history.push(r.path);
    },
  }));
  return (
    <EuiFocusTrap>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
        onKeyDown={onKeyDown}
      >
        <EuiHeader>
          <EuiHeaderSection grow>
            <EuiHeaderSectionItem border="right">
              <EuiHeaderLogo
                iconType="logoRedis"
                href="/"
                aria-label="Go home"
              />
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem border="right"></EuiHeaderSectionItem>
          </EuiHeaderSection>

          <EuiHeaderSection side="right">
            <EuiHeaderSectionItem>
              <EuiPopover
                panelPaddingSize="none"
                isOpen={isLogoutPopoverOpen}
                closePopover={() => setLogoutPopoverOpen(false)}
                button={
                  <EuiHeaderSectionItemButton
                    onClick={() => setLogoutPopoverOpen(true)}
                  >
                    <EuiAvatar name="H3llotom"></EuiAvatar>
                  </EuiHeaderSectionItemButton>
                }
              >
                <EuiListGroup>
                  <EuiListGroupItem
                    label="登出"
                    onClick={onLogout}
                  ></EuiListGroupItem>
                </EuiListGroup>
              </EuiPopover>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>
        <EuiNavDrawer showExpandButton isLocked showToolTips={false}>
          <EuiNavDrawerGroup listItems={menus}></EuiNavDrawerGroup>
        </EuiNavDrawer>
        <EuiPage className="euiNavDrawerPage">
          <EuiPageBody className="euiNavDrawerPage__pageBody">
            <EuiPageContent className={styles.content}>
              {renderRoutes(routes)}
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    </EuiFocusTrap>
  );
};

export default Admin;
