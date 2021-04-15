describe('Detail screen', () => {

  describe('should have detail screen', async () => {
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

  describe('modal detail screen', () => {
    describe('should have detail modal screen', async () => {
      await expect(element(by.id('detail_view_modal'))).toBeVisible();
      await expect(element(by.id('detail_tab_modal'))).toBeVisible();
      await expect(element(by.id('detail_txttab_modal'))).toBeVisible();
      await expect(element(by.id('detail_ngang_modal'))).toBeVisible();
    });

    describe('about',  () => {
      it('click about', async () => {
        await element(by.id('detail_tab_modal')).atIndex(0).tap();
        await expect(element(by.id('detail_about_modal'))).toBeVisible();
      });

      describe('should about detail modal screen', async () => {
        await expect(element(by.id('detail_viewinfo_modal'))).toBeVisible();
        await expect(element(by.id('detail_viewinfoheight_modal'))).toBeVisible();
      });
      
    });

    describe('base',  () => {
      it('click base', async () => {
        await element(by.id('detail_tab_modal')).atIndex(1).tap();
        await expect(element(by.id('detail_base_modal'))).toBeVisible();
      });

      describe('should base detail modal screen', async () => {
        await expect(element(by.id('detail_viewinfo_base_modal'))).toBeVisible();
        await expect(element(by.id('detail_viewbreeding_base_modal'))).toBeVisible();
      });
    });

    describe('evolution',  () => {
      it('click evolutiom', async () => {
        await element(by.id('detail_tab_modal')).atIndex(2).tap();
        await expect(element(by.id('detail_evolution_modal'))).toBeVisible();
      });
    });

    describe('moves',  () => {
      it('click moves', async () => {
        await element(by.id('detail_tab_modal')).atIndex(3).tap();
        await expect(element(by.id('detail_moves_modal'))).toBeVisible();
      });
    });
  });

  describe('back detail screen', () => {
    it('click back home', async () => {
      await element(by.id('back_detail')).tap();
    });
  });

});