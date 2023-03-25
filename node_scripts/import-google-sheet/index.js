#!/usr/bin/env node

// const json2md = require('json2md');
const fs = require('fs');
const https = require('https');

// CONFIG
const outputDir = './docs/overview/';
const outputFileName = 'overview.mdx';

// How to create JSON endpoint from Google Sheet: https://stackoverflow.com/a/68854199
const url =
  'https://sheets.googleapis.com/v4/spreadsheets/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/values/Terms-WOT-manage?alt=json&key=AIzaSyCA4sOfLTriHKjaQftREYWMnQNokDHf_tM';

https
  .get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      let oContent = JSON.parse(data);
      createMarkDownFiles(oContent);
    });
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });

function createMarkDownFiles(content) {
  if (content !== undefined) {
    // Create separate files
    // content.values.forEach((item, index) => {
    //   // Skip first one, https://stackoverflow.com/a/41283243
    //   if (index < 1) return;
    //   //   item[4] = item[4] || '-';

    //   let finalString = '';
    //   item.forEach((item, index) => {
    //     item = item.trim();

    //     item[index] = item[index] || '-';
    //     finalString += `## ${content.values[0][index]}\n\n${item}\n\n`;
    //   });

    //   fs.writeFile(
    //     // Where to write:
    //     outputDir + item[3] + '.mdx',

    //     // What to write:
    //     // 1: Frontmatter slug and title:
    //     `---\nslug: "${item[3]}"\ntitle: "${item[3]}"\n---\n` +
    //       // 2: Content:
    //       //   '## Key\n\n' +
    //       //   item[0] +
    //       //   '\n\n## Type\n\n' +
    //       //   item[1] +
    //       //   '\n\n## Definition\n\n' +
    //       //   item[4]
    //       finalString,

    //     // When it goes wrong:
    //     function (err) {
    //       if (err) {
    //         return console.log(err);
    //       }
    //     }
    //   );
    // });

    // Everything in one file, in a table:

    // function levelConvertor(level) {
    //   switch (level) {
    //     case 1:
    //       return 1;
    //     case 2:
    //       return 1;
    //     case 3:
    //       return 2;
    //     case 7:
    //       return 3;
    //   }
    // }

    function levelConvertor(level) {
      // alert: string, not number
      if (level === '1') {
        return 1;
      } else if (level === '2') {
        return 1;
      } else if (level === '3') {
        return 2;
      } else if (level === '7') {
        return 3;
      }
    }

    let finalStringAll = '';

    // Create table container
    finalStringAll += `<div id='table-container'>`;

    // Create buttons and input
    finalStringAll += `<input className="search margin-vert--md margin-horiz--none padding--sm" placeholder="Search" autoFocus />
    <button className="sort button button--secondary margin--md" data-sort="column0">Sort by Key</button>
    <button className="sort button button--secondary margin--md" data-sort="column1">Sort by Type</button>
    <button className="sort button button--secondary margin--md" data-sort="column8">Sort by Level</button>
    <button className="sort button button--secondary margin--md" data-sort="column12">Sort by Cat_CESR</button>`;
    // End buttons and inputs

    // Create table
    finalStringAll += `<table className='googlesheet'>`;

    // Create table header
    finalStringAll += `<thead>`;
    finalStringAll += `<tr>`;

    content.values[0].forEach((element, index) => {
      finalStringAll += `<th data-columnnr='${index}'>${element}</th>`;
    });

    finalStringAll += `</tr>`;
    finalStringAll += `</thead>`;
    // End table header

    // Create table body
    finalStringAll += `<tbody className='list'>`;

    // Create table rows
    content.values.forEach((item, indexTableRow) => {
      // Skip first one, https://stackoverflow.com/a/41283243
      if (indexTableRow < 1) return;
      //   if (index < 1 || index > 12) return;

      level = levelConvertor(item[8]);
      finalStringAll += `<tr data-row='row${indexTableRow}' data-rownr='${indexTableRow}'>`;

      // TODO: table looks wrong:
      // finalStringAll += `<tr data-level='${level}'>`;

      // Create table cells
      item.forEach((item, indexTableCell) => {
        if (indexTableCell > 17) return;
        item = item || '–';

        finalStringAll += `<td className='column${indexTableCell}' data-row='row${indexTableRow}' data-rownr='${indexTableRow}' data-column='column${indexTableCell}' data-columnnr='${indexTableCell}'>`;
        if (indexTableCell === 6 || indexTableCell === 7) {
          finalStringAll += `<a target='_blank' rel='noopener' href='${item}'>Link</a>`;
        } else {
          finalStringAll += `${item}`;
        }

        finalStringAll += `</td>`;
      });
      // End table cells

      finalStringAll += `</tr>`;
    });
    // End table rows

    // End table body
    finalStringAll += `</tbody>`;

    // End table
    finalStringAll += `</table>`;

    // End table container
    finalStringAll += `</div>`;

    fs.writeFile(
      outputDir + outputFileName,
      finalStringAll,
      // When it goes wrong:
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  }
}
// test
