import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Welcome to the-internet`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
  });

test('Visit the-Internet', async t => {
  await t
    .expect(func.getPageUrl()).eql(page.homePageUrl)
    .expect(page.title.innerText).eql(page.titleText)
    .expect(page.header1.innerText).eql(page.header1Txt)
    .expect(page.header2.innerText).eql(page.header2Txt)
    .expect(page.footer.innerText).eql(page.footerTxt)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)

});

test('Hover Over Page Links', async t => {

  var i;
  for (i = 0; i < links.pageLinks.length; i++) {
    await t
      .hover(links.pageLinks[i])
  }
});

test('Validate HyperLink Text', async t => {
  //await t
  //.expect(links.abTesting.innerText).eql(links.abTestingText)
  var i;
  for (i = 0; i < links.pageLinks.length; i++) {
    await t
      .expect(links.pageLinks[i].innerText).eql(links.pageLinksText[i])
  }

})

test('Validatre HyperLink HREF', async t => {
  //await t
  //  .expect(links.abTesting.getAttribute('href')).eql(links.abTestingHref)
  var i;
  for (i = 0; i < links.pageLinks.length; i++) {
    await t
      .expect(links.pageLinks[i].getAttribute('href')).eql(links.pageLinksHref[i])
  }
})

test('Click Link, Validate URL, Click Back - Errors out on some pages', async t => {
  //await t
  //  .click(links.abTesting)
  //await t
  //  .expect(func.getPageUrl()).eql(page.basePageUrl + links.abTestingHref)
  //await func.goBack()

  var i;
  for (i = 0; i < links.pageLinks.length; i++) {
    await t
      .click(links.pageLinks[i])
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.pageLinksHref[i])
    await func.goBack()
  }
})
