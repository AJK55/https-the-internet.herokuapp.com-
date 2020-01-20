import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Testing the Context Menu Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .setNativeDialogHandler((type, text, url) => true)
    await t
      .maximizeWindow()
    await t
      .click(links.contextMenu)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.conHrefMenuHref)
  });


test('Hover Locators', async t => {
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
  await t
    .expect(page.header3.innerText).eql(page.contextHeaderText)
    .expect(page.contextMenuP1.innerText).eql(page.contextMenuP1Text)
    .expect(page.contextMenuP2.innerText).eql(page.contextMenuP2Text)
  await t
    .hover(page.contextMenuBox)
})

test('Right-Click Box and Validate ALert', async t => {
  await t
    .hover(page.contextMenuBox)
  await t
    .rightClick(page.contextMenuBox)
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
  await t
    .expect(page.header3.innerText).eql(page.contextHeaderText)
    .expect(page.contextMenuP1.innerText).eql(page.contextMenuP1Text)
    .expect(page.contextMenuP2.innerText).eql(page.contextMenuP2Text)
  await t
    .hover(page.contextMenuBox)

  const history = await t.getNativeDialogHistory();

  await t
    .expect(history[0].type).eql(page.contxtMenuType)
    .expect(history[0].text).eql(page.contextMenuAlertText)
    .expect(history[0].url).eql(page.contextMenuURL)


})
