import { VideomakerPage } from './app.po';

describe('videomaker App', function() {
  let page: VideomakerPage;

  beforeEach(() => {
    page = new VideomakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Monteiro');
  });
});
