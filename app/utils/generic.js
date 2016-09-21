"use strict";
var Generic;
(function (Generic) {
    /**
     * [键值对]
     * @type {Object}
     */
    class KeyValuePair {
    }
    Generic.KeyValuePair = KeyValuePair;
    /**
     * [字典类]
     * @type {[type]}
     */
    class Dictionary {
        constructor() {
            this._keys = [];
            this._values = [];
            this._items = [];
        }
        get Keys() {
            for (var item of this._items) {
                this._keys.push(item.Key);
            }
            return this._keys;
            ;
        }
        get Values() {
            for (var item of this._items) {
                this._values.push(item.Value);
            }
            return this._values;
            ;
        }
        add(key, value) {
            if (key === null || key === undefined)
                throw new Error('ArgumentNullException: the key can not be null !');
            if (this.hasKey(key))
                throw new Error('ArgumentException: the key is included in Dictionary !');
            var item = {
                Key: key,
                Value: value
            };
            this._items.push(item);
        }
        hasKey(key) {
            this._keys.forEach((k, i) => {
                if (k === key) {
                    return true;
                }
            });
            return false;
        }
    }
    Generic.Dictionary = Dictionary;
})(Generic = exports.Generic || (exports.Generic = {}));
