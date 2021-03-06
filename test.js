const alert = require('./index');

alert();
alert({ type: "success", msg: "success", name: "Done" });
alert({ type: "warning", msg: "warning" });
alert({ type: "info", msg: "info" });
alert({ type: "error", msg: "Error" });