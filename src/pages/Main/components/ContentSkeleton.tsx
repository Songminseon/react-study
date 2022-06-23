import { COLORS } from '@Constants/colors';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px 60px;

  .skeleton-header {
    width: 200px;
    height: 40px;
    background-color: ${COLORS.grey_f5};
  }

  .skeleton-container {
    display: flex;
    margin: 16px 0px 40px 0px;
  }

  .skeleton-content {
    width: calc(20% - 16px);
    height: 200px;
    margin: 0px 8px;
    background-color: ${COLORS.grey_f5};
  }
`;

const ContentSkeleton = () => {
  return (
    <Wrapper>
      <div className="skeleton-header" />
      <div className="skeleton-container">
        <div className="skeleton-content" />
        <div className="skeleton-content" />
        <div className="skeleton-content" />
        <div className="skeleton-content" />
        <div className="skeleton-content" />
      </div>
    </Wrapper>
  );
};

export default ContentSkeleton;
