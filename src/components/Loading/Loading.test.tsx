import { render } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

import Loading from './Loading';

const renderComponent = (props: { route?: string }) =>
  render(<TestHarness {...props} children={<Loading />}></TestHarness>).container;

describe('<Loading />', () => {
  test('MuiCircularProgress-root class should be in page', () => {
    const component = renderComponent({});

    expect(component?.querySelector('.MuiCircularProgress-root')).toBeVisible();
  });
});
