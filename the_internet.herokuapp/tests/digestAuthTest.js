import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Testing the Digest Auth Page`
  .page `https://the-internet.herokuapp.com/`
  .httpAuth({
    username: 'admin',
    password: 'admin',
  })
  .beforeEach(async t => {
    //await t
    //  .setNativeDialogHandler((type, text, url) => true)
    await t
      .maximizeWindow()
    await t
      .click(links.digestAuth)
  });



test.skip('Authenticate to Digest Auth', async t => {
  await t
    .expect(page.header3.innerText).eql(page.basicAuthHeaderText)
    .expect(page.basicAuthP1.innerText).eql(page.basicAuthP1Text)

})
