import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '@Constants/colors';

const CardWrapper = styled(Link)`
  all: unset;
  width: 200px;
  display: block;
  position: relative;

  .content-image {
    width: 100%;
    border-radius: 3px;
  }

  .content-rank {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.77);
    border-radius: 5px;
    top: 6px;
    left: 6px;
    width: 20px;
    height: 20px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    line-height: 20px;
  }

  p {
    text-decoration: none !important;
    color: ${COLORS.black_29};
    margin: 0px;
  }
`;

const ContentCard = () => {
  return (
    <CardWrapper to={'/content'}>
      <div className="content-rank">1</div>

      <img
        src="https://an2-img.amz.wtchn.net/image/v2/A_2H7CpybTzRqcjyuIGjew.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URTFOREEzTWpReU5qRTJNemsxTkRZaWZRLmkxX1BMT2hqUGxQSzlWYVZPdVN2QUJ4eW0ydDBCbGpiaGQ2cWxRUTZubEE"
        alt="."
        className="content-image"
      />

      <p>마녀마녀마녀마녀마녀마녀</p>
      <p>2021 ・ 한국</p>
      <p>예매율 32% ・ 누적 관객 45만명</p>
    </CardWrapper>
  );
};

export default ContentCard;
