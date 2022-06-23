import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Star from '@Components/Star';
import { COLORS } from '@Constants/colors';
import { gradeFormat } from '@Utils/formatUtils';

const CardWrapper = styled(Link)`
  all: unset;
  width: 100%;
  display: inline-block;
  position: relative;

  p {
    text-decoration: none !important;
    margin: 0px;
    color: ${COLORS.black_55};
    font-size: 14px;
  }

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

  .content-title {
    color: ${COLORS.black_29};
    font-size: 15px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .grade-container {
    display: flex;
    align-items: center;

    svg {
      margin: 2px 1px 0px;
    }
  }
`;

interface Props {
  rank: number;
  title: string;
  posterImg: string;
  year: string;
  nation: string;
  grade: number;
}

const ContentCard = ({ rank, title, posterImg, year, nation, grade }: Props) => {
  return (
    <CardWrapper to={'/content'}>
      <div className="content-rank">{rank}</div>

      <img src={posterImg} alt="." className="content-image" />

      <p className="content-title">{title}</p>
      <p>
        {year} ・{nation}
      </p>
      <div className="grade-container">
        <p>평점</p>
        <Star />
        <p>{gradeFormat(grade)}</p>
      </div>
    </CardWrapper>
  );
};

export default ContentCard;
