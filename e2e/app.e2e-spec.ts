import { ChiliCookoffPage } from './app.po';

describe('chili-cookoff App', function() {
  let page: ChiliCookoffPage;

  beforeEach(() => {
    page = new ChiliCookoffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
