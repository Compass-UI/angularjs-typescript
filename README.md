# AngularJS with TypeScript

For a quick example see:

(AngularJS with TypeScript)[https://brianflove.com/2016/12/26/typing-up-your-angular-1-app/]

## Installation

`gemini-david 🌴  npm i types`
`gemini-david 🌴  npm i tsd -g`
Error:
`[ERR!] Error: Cannot find module 'internal/util/types'`
Solution:
`npm rebuild`
```
gemini-david 🌴  tsd install angular --resolve --save

>> zero results
```

# Knockout typings

`npm install --save @types/knockout`
[https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/knockout](Knockout Typings)

# Frequently Used Commands
| Command        | Depricated           | Comment  |
| ------------- |:-------------:| -----:|
|   npm i types   | npm i @typeings |  |
|       |       |    |
|  |       |     |

# Final Notes

# Advanced AngularJS

## What are decorators?

Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original source code. In AngularJS, decorators are functions that allow a service, directive or filter to be modified prior to its usage.

[https://docs.angularjs.org/guide/decorators](https://docs.angularjs.org/guide/decorators)

There are two ways to register decorators

```javascript
$provide.decorator
module.decorator```

Each provide access to a `$delegate`, which is the instantiated service/directive/filter, prior to being passed to the service that required it.

