import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';

const page = new Page();
const func = new Functions();
const links = new Links();

fixture `Testing the Add/Remove Elements Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .click(links.addRemove)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.addRemoveHref)
  });


test('Validate Locators - Not Buttons', async t => {
  await t
    .eval(() => location.reload(true)); //Refreshes the page
  await t
    .expect(page.addRemoveHeader.innerText).eql(page.addRemoveHeaderTxt)
    .expect(page.footer.innerText).eql(page.footerTxt)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)
});

test('Add 1 Element and Delete', async t => {
  await t
    .eval(() => location.reload(true)); //Refreshes the page
  await t
    .expect(page.deleteButton.exists).notOk()
  await t
    .expect(page.addButton.innerText).eql(page.addButtonTxt)
    .click(page.addButton)
  await t
    .expect(page.deleteButton.exists).ok()
    .expect(page.deleteButton.innerText).eql(page.deleteButtonTxt)
  await t
    .click(page.deleteButton)
  await t
    .expect(page.deleteButton.exists).notOk()

})


test('Add Random # Elements and Randomly Delete', async t => {
  const a = Math.floor(Math.random() * 100);

  await t
    .expect(page.deleteButton.exists).notOk()
  await t
    .eval(() => location.reload(true))

  for (let i = 0; i < a; i++) {
    await t
      .click(page.addButton)
  }

  await t
    .expect(page.deleteButton.exists).ok()

  for (let i = 0; i < a; i++) {
    await t
      .click(page.deleteButton)
  }

  await t
    .expect(page.deleteButton.exists).notOk()
})
