import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Testing the Broken Images Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .click(links.brokenImgs)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.brokenImgsHref)
  });



test('Validate Broken Images Page Locators', async t => {
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)
    .expect(page.header3.innerText).eql(page.brokenImagesTxt)
    .expect(page.brokenImage1.exists).ok()
    .expect(page.brokenImage2.exists).ok()
    .expect(page.brokenImage3.exists).ok()
    .expect(page.brokenImage1.getAttribute('src')).eql(page.brokenImageSrc1)
    .expect(page.brokenImage2.getAttribute('src')).eql(page.brokenImageSrc2)
    .expect(page.brokenImage3.getAttribute('src')).eql(page.brokenImageSrc3)

})


test('Validate Status Code for Each Image -  Set to 404 Since Images are Broken by Default', async t => {
  var i;
  for (i = 0; i < page.brokenImagesUrl.length; i++) {
    const status = await func.getRequestResult(page.brokenImagesUrl[i]);
    console.log(page.brokenImagesUrl[i] + '= ' + status)
    await t.expect(status).eql(404)
  }


})
