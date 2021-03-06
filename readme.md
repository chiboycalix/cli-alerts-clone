## API documentation

### alerts(options)

#### > options

Type: `object`<br>
Default: `{}`

You can specify the options below.

#### > type

Type: `string`<br>
Default: `error`

#### > msg

Type: `string`<br>
Default: `You have not provided all options`

#### > name

Type: `string`<br>
Default: `""`

## Usage

```js
const alert = require('./index');

alert();
alert({ type: "success", msg: "success", name: "Done" });
alert({ type: "warning", msg: "warning" });
alert({ type: "info", msg: "info" });
alert({ type: "error", msg: "Error" });