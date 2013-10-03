/*
 * File: app/model/AddressData.js
 * @author John Yin <john.yin@ebizdesigner.com>
 */

Ext.define('WhereIAm.model.AddressData', {
    extend: 'Ext.data.Model',
    alias: 'model.addressdata',

    config: {
        fields: [
            {
                name: 'item',
                type: 'auto'
            },
            {
                name: 'value',
                type: 'auto'
            }
        ]
    }
});