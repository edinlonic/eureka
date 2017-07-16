import { EurekaAppPage } from './app.po';

describe('eureka-app App', () => {
  let page: EurekaAppPage;

  beforeEach(() => {
    page = new EurekaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
