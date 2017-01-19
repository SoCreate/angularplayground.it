import { AngularplaygrounditPage } from './app.po';

describe('angularplaygroundit App', function() {
  let page: AngularplaygrounditPage;

  beforeEach(() => {
    page = new AngularplaygrounditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
