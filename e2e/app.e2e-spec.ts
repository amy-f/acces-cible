import { AccesCiblePage } from './app.po';

describe('acces-cible App', function() {
  let page: AccesCiblePage;

  beforeEach(() => {
    page = new AccesCiblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
