describe('The App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should initial direct to the sign in screen', async () => {
    await expect(element(by.id('setup-screen'))).toBeVisible();
  });
});
