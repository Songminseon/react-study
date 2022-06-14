import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@Constants/colors';

const FooterWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  background-color: ${COLORS.black_1c};

  ul {
    list-style: none;
    display: flex;
    margin: 0px 5px;
    padding: 0px;

    li {
      font-size: 13px;
      color: ${COLORS.grey_a5};
    }

    li:after {
      content: '|';
      margin: 0px 5px;
    }

    li:last-child:after {
      content: '';
    }
  }
  .footer-contact {
    margin: 12px 0px;
  }

  .footer-wrapper {
    margin: 0px 20px;
  }
`;

const Footer = () => {
  const footerNav = [
    {
      id: 1,
      value: '서비스 이용약관',
    },
    {
      id: 2,
      value: '개인정보 처리방침',
    },
    {
      id: 3,
      value: '회사 안내',
    },
  ];

  const footerContact = [
    {
      label: '고객센터',
      url: 'smsun0329@gmail.com',
    },
    {
      label: '광고문의',
      url: 'smsun0329@naver.com',
    },
    {
      label: '제휴 및 대외 협력',
      url: 'songminseon.github.io',
    },
  ];

  const footerCompany = [
    {
      id: 1,
      value: '주식회사 왓챠',
    },
    {
      id: 2,
      value: '대표 송민선',
    },
    {
      id: 3,
      value: '서울특별시 노원구 공릉동 559',
    },
  ];

  return (
    <FooterWrapper>
      <div className="footer-wrapper">
        <ul>
          {footerNav.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
        <div className="footer-contact">
          {footerContact.map(item => (
            <ul key={item.label}>
              <li>{item.label}</li>
              <li>{item.url}</li>
            </ul>
          ))}
        </div>
        <ul>
          {footerCompany.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
