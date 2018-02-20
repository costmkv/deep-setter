# Deep setter

## Example

```javascript
const object = deepSetter({
    object: {test: ''},
    valueToSet: {test1: 1},
    path: 'test'
}); // {test: {test1: 1}}
```
```javascript
const object = deepSetter({
    object: {test: [{test1: 1}, {test2: 2}]},
    valueToSet: {test3: 1},
    path: 'test.$0'
}); // {test: [{test3: 1}, {test2: 2}]}
```
