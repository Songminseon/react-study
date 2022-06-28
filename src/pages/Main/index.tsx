import React, { Suspense } from 'react';

import MainLayout from '@Layouts/MainLayout';
import ContentList from './components/ContentList';
import ContentSkeleton from './components/ContentSkeleton';
import ErrorBoundary from '@Components/ErrorBoundary';

const Index = () => {
  return (
    <MainLayout>
      <Suspense fallback={<ContentSkeleton />}>
        <ErrorBoundary>
          <ContentList />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default Index;
