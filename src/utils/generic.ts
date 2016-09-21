

export namespace Generic {

    /**
     * [键值对]
     * @type {Object}
     */
    export class KeyValuePair<TKey, TValue>{
        Key: TKey;
        Value: TValue
    }
    /**
     * [字典类]
     * @type {[type]}
     */
    export class Dictionary<TKey, TValue> {
        constructor() {
            this._items = [];
        }

        private _items: Array<KeyValuePair<TKey, TValue>>;
        private _keys: Array<TKey> = [];

        get Keys(): Array<TKey> {
            for (var item of this._items) {
                this._keys.push(item.Key);
            }
            return this._keys;;
        }
        private _values: Array<TValue> = [];

        get Values(): Array<TValue> {
            for (var item of this._items) {
                this._values.push(item.Value);
            }
            return this._values;;
        }

        add(key: TKey, value: TValue) {
            if (key === null || key === undefined)
                throw new Error('ArgumentNullException: the key can not be null !');
            if (this.hasKey(key))
                throw new Error('ArgumentException: the key is included in Dictionary !');
            var item: KeyValuePair<TKey, TValue> = {
                Key: key,
                Value: value
            }
            this._items.push(item);
        }

        hasKey(key: TKey): boolean {
            this._keys.forEach((k, i) => {
                if (k === key) {
                    return true;
                }
            });
            return false;
        }


    }

}
