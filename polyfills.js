import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'classlist.js';
import 'web-animations-js';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'core-js/es7/array';
import 'core-js/es7/object';
if (typeof SVGElement.prototype.contains === 'undefined') {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}
window.global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;
//# sourceMappingURL=polyfills.js.map