import {
  Selector
} from 'testcafe';

import Page from './shared/page.js';
import Functions from './shared/functions.js';
import Links from './shared/pageLinks.js';


const page = new Page();
const func = new Functions();
const links = new Links();


fixture `Testing the Challenging DOM Page`
  .page `https://the-internet.herokuapp.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .click(links.challengingDom)
    await t
      .expect(func.getPageUrl()).eql(page.basePageUrl + links.challengingDomHref)
  });

test('Validate Locators on Challenging DOM Page', async t => {
  await t
    .hover(page.footer)
    .hover(page.forkGitHub)
    .expect(page.footerLink.getAttribute('href')).eql(page.footerUrl)
    .expect(page.forkGitHub.getAttribute('src')).eql(page.gitHubImgSrc)
    .expect(page.forkGitHubLink.getAttribute('href')).eql(page.gitHubUrl)
    .expect(page.header3.innerText).eql(page.challengingDOMTxt)
    .expect(page.paragraph.innerText).eql(page.challengingDOMPTxt)
})

test('Hover over Buttons', async t => {
  //.hover(page.barButton)
  var i;
  for (i = 0; i < page.challengingDOMButtons.length; i++) {
    await t
      .hover(page.challengingDOMButtons[i])
  }
})

test('Hover over Column Headers', async t => {
  // Loop over Column Headers
  // https://stackoverflow.com/questions/54635324/testcafe-loop-through-dom
  // https://medium.com/@tg16/how-to-iterate-links-and-click-them-in-testcafe-76bcc3fada7c
  const cHeaderElements = page.challengingDomCHeaders;
  var cHeaderElementsCount = await cHeaderElements.count;
  //console.log(elements)
  //console.log(elementsCount)
  for (let i = 0; i < cHeaderElementsCount; i++) {
    //const elementSelector = elements.nth(i);
    //const sanity = await elementSelector();
    await t
      .hover(cHeaderElements.nth(i))
  }

})

test('Hover over Row Data', async t => {
  // Loop over Rows
  // https://stackoverflow.com/questions/54635324/testcafe-loop-through-dom
  // https://medium.com/@tg16/how-to-iterate-links-and-click-them-in-testcafe-76bcc3fada7c
  const row1Elements = page.challengingDomRow1Data;
  var row1ElementsCount = await row1Elements.count;
  for (let i = 0; i < row1ElementsCount; i++) {
    await t
      .hover(row1Elements.nth(i))
  }

  const row2Elements = page.challengingDomRow2Data;
  var row2ElementsCount = await row2Elements.count;
  for (let i = 0; i < row2ElementsCount; i++) {
    await t
      .hover(row2Elements.nth(i))
  }
  const row3Elements = page.challengingDomRow3Data;
  var row3ElementsCount = await row3Elements.count;
  for (let i = 0; i < row3ElementsCount; i++) {
    await t
      .hover(row3Elements.nth(i))
  }
  const row4Elements = page.challengingDomRow4Data;
  var row4ElementsCount = await row4Elements.count;
  for (let i = 0; i < row4ElementsCount; i++) {
    await t
      .hover(row4Elements.nth(i))
  }

  const row5Elements = page.challengingDomRow5Data;
  var row5ElementsCount = await row5Elements.count;
  for (let i = 0; i < row5ElementsCount; i++) {
    await t
      .hover(row5Elements.nth(i))
  }

  const row6Elements = page.challengingDomRow6Data;
  var row6ElementsCount = await row6Elements.count;
  for (let i = 0; i < row6ElementsCount; i++) {
    await t
      .hover(row6Elements.nth(i))
  }

  const row7Elements = page.challengingDomRow7Data;
  var row7ElementsCount = await row7Elements.count;
  for (let i = 0; i < row7ElementsCount; i++) {
    await t
      .hover(row7Elements.nth(i))
  }

  const row8Elements = page.challengingDomRow8Data;
  var row8ElementsCount = await row8Elements.count;
  for (let i = 0; i < row8ElementsCount; i++) {
    await t
      .hover(row8Elements.nth(i))
  }

  const row9Elements = page.challengingDomRow9Data;
  var row9ElementsCount = await row9Elements.count;
  for (let i = 0; i < row9ElementsCount; i++) {
    await t
      .hover(row9Elements.nth(i))
  }

  const row10Elements = page.challengingDomRow10Data;
  var row10ElementsCount = await row10Elements.count;
  for (let i = 0; i < row10ElementsCount; i++) {
    await t
      .hover(row10Elements.nth(i))
  }

})

test('Hover over Edit/Delete Links', async t => {
  var i;
  for (i = 0; i < page.challengingDomEditDeleteLinks.length; i++) {
    await t
      .hover(page.challengingDomEditDeleteLinks[i])
  }

})

test('Click Edit/Delete Links - Validate URL', async t => {
  var i;
  for (i = 0; i < page.challengingDomEditDeleteLinks.length; i++) {
    await t
      .click(page.challengingDomEditDeleteLinks[i])
    if (i % 2 === 1) {
      await t
        .expect(await func.getPageUrl()).eql('https://the-internet.herokuapp.com/challenging_dom#delete')
    } else {
      await t
        .expect(await func.getPageUrl()).eql('https://the-internet.herokuapp.com/challenging_dom#edit')
    }
  }
})

test('Validate Answer Changes on Button Click', async t => {
  var i;
  for (i = 0; i < page.challengingDOMButtons.length; i++) {
    await t
      .click(page.challengingDOMButtons[i])
    await t
      .hover(Selector('canvas'))
    //need to figure out how to capture 'Answer' data
  }


})
