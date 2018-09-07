import { GitGithubapiPage } from './app.po';

describe('git-githubapi App', () => {
  let page: GitGithubapiPage;

  beforeEach(() => {
    page = new GitGithubapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to git-githubapi!');
  });
});
