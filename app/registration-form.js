"use strict";
var Registration = (function () {
    function Registration(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.name = options.key || '';
        this.email = options.label || '';
        this.password = options.password || '';
        this.password_confirmation = options.password_confirmation || '';
    }
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=registration-form.js.map