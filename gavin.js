import { Selector } from 'testcafe';

fixture `Gavin smoketest`
  .page `https://molgenis20.gcc.rug.nl`;

test('Gavin test 1', async t => {
  await t
    .resizeWindow(1280, 800)
    .click(Selector('.btn').withText('Upload file'))
    .setFilesToUpload('input[type=file]', 'files/gavin_simpleexamplefile_truevcf.vcf')
    .typeText('input[type=string]', 'blaat')
    .click('#upload-file-btn')
    .expect(Selector('a.btn.btn-info').withText('All done!').exists).ok({
    timeout: 60000
  });
// Test code
});
