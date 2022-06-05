"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
module.exports = ({
    unHandledErrorMiddleware: function (req, res, next) {
        try {
            next();
        }
        catch (e) {
            return res.status(500).send("Unhandled error " + e.message);
        }
    },
    checkId: function (req, res, next) {
        try {
            if (!lodash_1.get(req, "_id"))
                throw new Error("no _id");
            next();
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    },
});
//# sourceMappingURL=index.js.map