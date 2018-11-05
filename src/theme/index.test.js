import theme from './index';

describe('The theme', () => {
  it('should be a theme', () => {
    expect(theme).toMatchSnapshot();
  });
});
