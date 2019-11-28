import {
  Selector
} from 'testcafe';


export default class Page {
  constructor() {

    this.pageTitle = [
    this.title = Selector('title'),
      this.titleText = 'The Internet',
  ]

    this.pageUrls = [
      this.homePageUrl = 'https://the-internet.herokuapp.com/',
      this.basePageUrl = 'https://the-internet.herokuapp.com',
    ]

    this.basePageLocators = [
      this.header1 = Selector('#content > h1'),
      this.header2 = Selector('#content > h2'),
      this.header3 = Selector('#content > div > h3'),
      this.footer = Selector('#page-footer > div > div'),
      this.footerLink = Selector('#page-footer > div > div > a'),
      this.forkGitHub = Selector('body > div:nth-child(2) > a > img'),
      this.forkGitHubLink = Selector('body > div:nth-child(2) > a'),
      this.paragraph = Selector('#content > div > p'),
    ]

    this.basePage = [
      this.header1Txt = 'Welcome to the-internet',
      this.header2Txt = 'Available Examples',
      this.footerTxt = 'Powered by Elemental Selenium',
      this.footerUrl = 'http://elementalselenium.com/',
    ]

    this.forkMe = [
      this.gitHubUrl = 'https://github.com/tourdedave/the-internet',
      this.gitHubImgSrc = '/img/forkme_right_green_007200.png',
    ]

    this.abTestingLocators = [
      //this.abHeader = Selector('#content > div > h3'),
      this.abParagraph = Selector('#content > div > p')
    ]

    this.abTestingText = [
      this.abHeaderVariation = 'A/B Test Variation 1',
      this.abHeaderControl = 'A/B Test Control',
      this.abParagraphTxt = 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).',
    ]

    this.addRemoveLocators = [
      this.addRemoveHeader = Selector('#content > h3'),
    ]

    this.addRemoveText = [
      this.addRemoveHeaderTxt = 'Add/Remove Elements',
    ]

    this.addRemoveButtons = [
      this.addButton = Selector('#content > div > button'),
      this.deleteButton = Selector('#elements > button'),
    ]

    this.addRemoveButtonsText = [
      this.addButtonTxt = 'Add Element',
      this.deleteButtonTxt = 'Delete',
    ]

    this.brokenImagesText = [
      this.brokenImagesTxt = 'Broken Images',
    ]

    this.brokenImagesLocators = [
      this.brokenImage1 = Selector('#content > div > img:nth-child(2)'),
      this.brokenImage2 = Selector('#content > div > img:nth-child(3)'),
      this.brokenImage3 = Selector('#content > div > img:nth-child(4)'),
    ]
    this.brokenImagesSrc = [
      this.brokenImageSrc1 = 'asdf.jpg',
      this.brokenImageSrc2 = 'hjkl.jpg',
      this.brokenImageSrc3 = 'img/avatar-blank.jpg',
    ]

    this.brokenImagesUrl = [
      this.brokenImageUrl1 = (this.homePageUrl + this.brokenImageSrc1),
      this.brokenImageUrl2 = (this.homePageUrl + this.brokenImageSrc2),
      this.brokenImageUrl3 = (this.homePageUrl + this.brokenImageSrc3),
    ]

    this.challengingDOMText = [
      this.challengingDOMTxt = 'Challenging DOM',
      this.challengingDOMPTxt = "The hardest part in automated web testing is finding the best locators (e.g., ones that well named, unique, and unlikely to change). It's more often than not that the application you're testing was not built with this concept in mind. This example demonstrates that with unique IDs, a table with no helpful locators, and a canvas element.",
    ]

    this.challengingDOMButtons = [
      this.barButton = Selector('div.large-2.columns > .button'),
      this.bazButton = Selector('div.large-2.columns > .button.alert'),
      this.quxButton = Selector('div.large-2.columns > .button.success'),
    ]

    this.challengingDomTable = [
        this.challengingDomCHeaders = Selector("div.large-10.columns > table > thead > tr > th"),
        this.challengingDomRow1Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(1) > td'),
        this.challengingDomRow2Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(2) > td'),
        this.challengingDomRow3Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(3) > td'),
        this.challengingDomRow4Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(4) > td'),
        this.challengingDomRow5Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(5) > td'),
        this.challengingDomRow6Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(6) > td'),
        this.challengingDomRow7Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(7) > td'),
        this.challengingDomRow8Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(8) > td'),
        this.challengingDomRow9Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(9) > td'),
        this.challengingDomRow10Data = Selector('div.large-10.columns > table > tbody > tr:nth-child(10) > td'),
            ]

    this.challengingDomEditDeleteLinks = [
      this.row1Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(1)'),
      this.row1Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(2)'),
      this.row2Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(2) > td:nth-child(7) > a:nth-child(1)'),
      this.row2Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)'),
      this.row3Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(3) > td:nth-child(7) > a:nth-child(1)'),
      this.row3Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(3) > td:nth-child(7) > a:nth-child(2)'),
      this.row4Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(4) > td:nth-child(7) > a:nth-child(1)'),
      this.row4Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(4) > td:nth-child(7) > a:nth-child(2)'),
      this.row5Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(5) > td:nth-child(7) > a:nth-child(1)'),
      this.row5Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(5) > td:nth-child(7) > a:nth-child(2)'),
      this.row6Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(6) > td:nth-child(7) > a:nth-child(1)'),
      this.row6Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(6) > td:nth-child(7) > a:nth-child(2)'),
      this.row7Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(7) > td:nth-child(7) > a:nth-child(1)'),
      this.row7Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(7) > td:nth-child(7) > a:nth-child(2)'),
      this.row8Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(8) > td:nth-child(7) > a:nth-child(1)'),
      this.row8Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(8) > td:nth-child(7) > a:nth-child(2)'),
      this.row9Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(9) > td:nth-child(7) > a:nth-child(1)'),
      this.row9Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(9) > td:nth-child(7) > a:nth-child(2)'),
      this.row10Edit = Selector('div.large-10.columns > table > tbody > tr:nth-child(10) > td:nth-child(7) > a:nth-child(1)'),
      this.row10Delete = Selector('div.large-10.columns > table > tbody > tr:nth-child(10) > td:nth-child(7) > a:nth-child(2)'),
    ]

    this.checkboxesText = [
      this.checkboxesTxt = 'Checkboxes',
      this.checkboxesLabel = ' checkbox 1\n checkbox 2',
    ]

    this.checkbox = [
      this.checkboxesCheckBox = Selector('#checkboxes > input[type=checkbox]'),
      this.checkboxes = Selector('#checkboxes'),
    ]


  }
}
