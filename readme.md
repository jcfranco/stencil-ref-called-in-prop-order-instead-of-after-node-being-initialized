### Description

This repo demonstrates a bug where the element passed to ref may not be completely initialized with all props/attribute values

### Steps

1. run `npm start`
2. notice in the console how `tabIndex`/`tabindex` is not set to the specified value

**Note**: as a workaround, specifying the `ref` callback last will ensure props/attributes are set by call time