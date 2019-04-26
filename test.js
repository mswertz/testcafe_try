import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `https://rd3.test.molgenis.org`;

test('My first test', async t => {
  await t
    .resizeWindow(1280, 800)
    .click('#open-button')
    .typeText('#username-field', 'demo')
    .typeText('#password-field', 'demo')
    .click('#signin-button')
    .click('#signout-button');
// Test code
});
