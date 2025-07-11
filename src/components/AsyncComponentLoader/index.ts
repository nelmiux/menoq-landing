import Loading from '../Loading';
import AsyncComponentLoader from './AsyncComponentLoader';
import type { AnyProps, LoadComponent, LoaderDefaultOptions } from './types';

const loaderDefaultOptions = {
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const configuredAsyncComponentLoader = (
  loadComponent: LoadComponent,
  additionalProps: AnyProps = {},
  loaderOptions: LoaderDefaultOptions = loaderDefaultOptions,
  FallbackWaiting = Loading,
) =>
  AsyncComponentLoader(
    loadComponent,
    additionalProps,
    loaderOptions,
    FallbackWaiting,
  );

export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;
