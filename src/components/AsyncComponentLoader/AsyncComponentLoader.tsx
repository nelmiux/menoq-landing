/* eslint-disable react/display-name */
import { FC, Suspense, lazy, useEffect, useState } from 'react';

import sleep from '@/utilities/sleep';

import { AnyProps, LoadComponent, LoaderDefaultOptions } from './types';

const getDelayedFallback = (Fallback: FC, delay: number) => (props: AnyProps) => {
  const [isDelayPassed, setIsDelayPassed] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setIsDelayPassed(true), delay);
    return () => clearTimeout(timerId);
  }, []);

  return isDelayPassed ? <Fallback {...props} /> : null;
};

const getLazyComponent = (loadComponent: LoadComponent, loaderOptions: LoaderDefaultOptions) =>
  lazy(async () => {
    // fix the moment of starting loading
    const start = performance.now();
    // start loading
    const moduleExports = await loadComponent();
    // loading is finished
    const end = performance.now();
    const diff = end - start;
    const { delay, minimumLoading } = loaderOptions;
    if (diff < delay || (diff > delay && diff > delay + minimumLoading)) {
      return moduleExports;
    }
    await sleep(delay + minimumLoading - diff);
    return moduleExports;
  });

const AsyncComponentLoader = (
  loadComponent: LoadComponent,
  additionalProps: AnyProps,
  loaderOptions: LoaderDefaultOptions,
  FallbackWaiting: FC,
) => {
  const Fallback = loaderOptions.delay ? getDelayedFallback(FallbackWaiting, loaderOptions.delay) : FallbackWaiting;

  const LazyComponent = getLazyComponent(loadComponent, loaderOptions);

  return (props: AnyProps) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...additionalProps} {...props} />
    </Suspense>
  );
};

export { getDelayedFallback };

export default AsyncComponentLoader;
