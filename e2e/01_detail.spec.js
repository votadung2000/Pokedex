describe('Detail screen', () => {

  describe('should have home screen', async () => {
    await expect(element(by.id('detail_screen'))).toBeVisible();
    await expect(element(by.id('back_detail'))).toBeVisible();
    await expect(element(by.id('heart_detail'))).toBeVisible();
    await expect(element(by.id('type_detail'))).toBeVisible();
    await expect(element(by.id('num_detail'))).toBeVisible();
    await expect(element(by.id('img_detail'))).toBeVisible();
  });

  describe('heart detail screen', () => {
    it('click heart home', async () => {
      await element(by.id('heart_detail')).tap();
      await expect(element(by.id('heart_detail'))).toBeVisible();

      await element(by.id('heart_detail')).tap();
      await expect(element(by.id('heart_detail'))).toBeVisible();
    });
  });


});