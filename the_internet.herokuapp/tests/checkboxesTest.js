import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';


const page = new Page();
const func = new Functions();
const links = new Links();


fixture `Testing the Checkboxes Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .click(links.checkboxes)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.checkboxesHref)
  });

test('Validate Locators on Checkboxes Page', async t => {
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)
    .expect(page.header3.innerText).eql(page.checkboxesTxt)

})

test('Validate Checkbox Label Text', async t => {
  await t
    .expect(page.checkboxes.innerText).eql(page.checkboxesLabel)
})


test('Check Checkboxes', async t => {
  const checkboxes = page.checkboxesCheckBox;
  var checkboxesCount = await checkboxes.count;

  for (let i = 0; i < checkboxesCount; i++) {
    await t
      .click(checkboxes.nth(i))
      .expect(checkboxes.checked).ok();
  }

})
