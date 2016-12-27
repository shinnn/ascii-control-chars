# ascii-control-chars

[![NPM version](https://img.shields.io/npm/v/ascii-control-chars.svg)](https://www.npmjs.com/package/ascii-control-chars)
[![Bower version](https://img.shields.io/bower/v/ascii-control-chars.svg)](https://github.com/shinnn/ascii-control-chars/releases)
[![Build Status](https://travis-ci.org/shinnn/ascii-control-chars.svg?branch=master)](https://travis-ci.org/shinnn/ascii-control-chars)

An array of ASCII control characters

```javascript
import asciiControlChars from 'ascii-control-chars';

asciiControlChars; //=> ['\u0000', '\u0001', ... '\u001f', '\u007f']

// '\b' is one of the ASCII control characters
asciiControlChars.includes('\b'); //=> true

// 'b' is not a control character
asciiControlChars.includes('b'); //=> false
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install ascii-control-chars
```

### [bower](https://bower.io/)

```
bower install ascii-control-chars
```

## API

### caretNotationCharacters

Type: `Array` of strings

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
