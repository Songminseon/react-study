import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useQuery } from 'react-query';
import axios from 'axios';
import ContentCard from './ContentCard';
import Header from '@Components/Header';
import ContentSkeleton from './ContentSkeleton';

const Wrapper = styled.div`
  h1 {
    padding: 0px 60px;
  }

  .content-container {
    margin-bottom: 60px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0px 60px;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    white-space: nowrap !important;
  }

  li {
    display: inline-block;
    padding: 0px 8px;
    width: calc(20% - 16px);
  }
`;

const ContentList = () => {
  const { domain } = queryString.parse(window.location.search);

  const { isLoading, error, data } = useQuery('contents', () =>
    axios.get('http://localhost:5000/api/home/movie').then(res => res.data)
  );

  const result = data?.result.result;

  if (isLoading) {
    return <ContentSkeleton />;
  }

  if (error) {
    return <span>fucking error</span>;
  }

  return (
    <Wrapper>
      {result?.map(item => (
        <div key={item.title} className="content-container">
          <Header name={item.title} />
          <ContentWrapper>
            <ul>
              {item.item.result?.map(el => (
                <li key={el.chart_rank}>
                  <ContentCard
                    rank={el.chart_rank}
                    title={el.content.title}
                    posterImg={el.content.poster.large}
                    year={el.content.year}
                    nation={el.content.nations[0].name}
                    grade={el.content.ratings_avg}
                  />
                </li>
              ))}
            </ul>
          </ContentWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

export default ContentList;
