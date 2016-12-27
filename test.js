'use strict';

const asciiControlChars = require('.');
const isAsciiControlChar = require('is-ascii-control-char');
const test = require('tape');

test('asciiControlChars', t => {
  t.strictEqual(
    asciiControlChars.length,
    33,
    'should include all ASCII control characters.'
  );

  t.deepEqual(
    asciiControlChars.filter(char => !isAsciiControlChar(char)),
    [],
    'should not include any non-control characters.'
  );

  t.deepEqual(
    asciiControlChars,
    asciiControlChars.slice(0).sort((current, next) => current.charCodeAt(0) - next.charCodeAt(0)),
    'should be arranged in order of character code.'
  );

  t.end();
});
