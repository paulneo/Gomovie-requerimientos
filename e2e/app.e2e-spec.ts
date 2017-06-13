import { GomovieRequerimientosPage } from './app.po';

describe('gomovie-requerimientos App', function() {
  let page: GomovieRequerimientosPage;

  beforeEach(() => {
    page = new GomovieRequerimientosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
