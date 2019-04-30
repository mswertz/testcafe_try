import { Selector } from 'testcafe';
const fetch = require('node-fetch');

fixture `Gavin smoketest`
  .page `https://molgenis20.gcc.rug.nl`;

test('Gavin test 1', async t => {
  //test if complete succesfull
  await t
    .resizeWindow(1280, 800)
    .click(Selector('.btn').withText('Upload file'))
    .setFilesToUpload('input[type=file]', 'files/gavin_simpleexamplefile_truevcf.vcf')
    .typeText('input[type=string]', 'blaat')
    .click('#upload-file-btn')
    .expect(Selector('a.btn.btn-info').withText('All done!').exists).ok({
    timeout: 60000
  })

  //test if content caontains expected values
  let href = 'https://molgenis20.gcc.rug.nl' + await Selector('.btn-primary').withText('Download GAVIN').getAttribute('href');
  console.log(href);

  await t.expect(Selector('.btn-primary').withText('Download GAVIN').getAttribute('href')).contains('/plugin/gavin-app')
    .expect(await fetch(href).then(
      function(response) {
        return response.text();
      }
    )).contains('CADD=-0.188424');
});
