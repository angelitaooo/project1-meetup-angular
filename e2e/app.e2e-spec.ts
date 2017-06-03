import { Project1MeetupAngularPage } from './app.po';

describe('project1-meetup-angular App', () => {
  let page: Project1MeetupAngularPage;

  beforeEach(() => {
    page = new Project1MeetupAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
