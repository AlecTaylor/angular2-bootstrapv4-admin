import { BootstrapAdminPage } from './app.po';

describe('bootstrap-admin App', function() {
  let page: BootstrapAdminPage;

  beforeEach(() => {
    page = new BootstrapAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
