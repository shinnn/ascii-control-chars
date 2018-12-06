# ascii-control-chars

[![npm version](https://img.shields.io/npm/v/ascii-control-chars.svg)](https://www.npmjs.com/package/ascii-control-chars)
[![Build Status](https://travis-ci.com/shinnn/ascii-control-chars.svg?branch=master)](https://travis-ci.com/shinnn/ascii-control-chars)

An `Array` of ASCII control characters

```javascript
import asciiControlChars from 'ascii-control-chars';

asciiControlChars; //=> ['\u0000', '\u0001', ... '\u001f', '\u007f']

// '\b' is one of the ASCII control characters
asciiControlChars.includes('\b'); //=> true

// 'b' is not a control character
asciiControlChars.includes('b'); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install ascii-control-chars
```

## API

```javascript
import asciiControlChars from 'ascii-control-chars';
```

### asciiControlChars

Type: `Array<string>`

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
