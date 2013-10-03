/*
 * File: app/store/AddressStore.js
 * @author John Yin <john.yin@ebizdesigner.com>
 */

Ext.define('WhereIAm.store.AddressStore', {
    extend: 'Ext.data.Store',
    alias: 'store.addressstore',

    requires: [
        'WhereIAm.model.AddressData'
    ],

    config: {
        model: 'WhereIAm.model.AddressData',
        storeId: 'addressStore',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'addressItems'
            }
        }
    }
});