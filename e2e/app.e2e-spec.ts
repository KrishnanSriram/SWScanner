import { SWscannerPage } from './app.po';

describe('swscanner App', () => {
  let page: SWscannerPage;

  beforeEach(() => {
    page = new SWscannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
