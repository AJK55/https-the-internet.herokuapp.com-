import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Testing the A/B Testing Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .click(links.abTesting)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.abTestingHref)

  });

test('Hover Locators', async t => {
  var i;
  for (i = 0; i < page.abTestingLocators.length; i++) {
    await t
      .hover(page.abTestingLocators[i])
  };
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
})

test('Validate Page Content', async t => {

  if (await page.header3.innerText === page.abHeaderControl) {
    await t
      .expect(page.header3.innerText).eql(page.abHeaderControl)
  } else {
    await t
      .expect(page.header3.innerText).eql(page.abHeaderVariation)
  }

  await t
    .expect(page.paragraph.innerText).eql(page.abParagraphTxt)
    .expect(page.footer.innerText).eql(page.footerTxt)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)

})
