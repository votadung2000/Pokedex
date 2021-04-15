describe('Home screen', () => {
  before(async () => {
    await device.launchApp(); // Khởi chạy ứng dụng sau cài đặt
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  describe('should have home screen', async () => {
    await expect(element(by.id('home_screen'))).toBeVisible();
    await expect(element(by.id('icon_home_back'))).toBeVisible();
    await expect(element(by.id('icon_home_scan'))).toBeVisible();
    await expect(element(by.id('home_flatlist'))).toBeVisible();
  });

  describe('home screen check back button', () => {
    it('click back home', async () => {
      await element(by.id('icon_home_back')).tap();
    });

    it('should alert back home', async () => {
      await expect(element(by.text('Back'))).toBeVisible();
    });

    it('click ok alert back home', async () => {
      await element(by.text('OK')).tap();
    });
  });

  describe('home screen check scan button', () => {
    it('click scanner', async () => {
      await element(by.id('icon_home_scan')).tap();
      await expect(element(by.id('home_screen'))).toBeNotVisible();
      await element(by.id('buttonBackScanner')).tap();
    });
  });

  describe('home screen check flatlist', () => {
    it('should card', async () => {
      await expect(element(by.id('home_card')).atIndex(0)).toBeVisible();
    });

    it('should item card', async () => {
      await expect(element(by.id('home_card_name')).atIndex(0)).toBeVisible();
      await expect(element(by.id('home_card_type')).atIndex(0)).toBeVisible();
      await expect(element(by.id('home_card_img')).atIndex(0)).toBeVisible();
    });

    // it('should flatlist', async () => {
    //   await element(by.id('home_flatlist')).scrollTo('bottom');
    // });

    it('click card', async () => {
      await element(by.id('home_card')).atIndex(0).tap();
    });
  });


});