/*
 * File: app/view/MainNav.js
 * @author John Yin <john.yin@ebizdesigner.com>
 */

Ext.define('WhereIAm.view.MainNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',

    requires: [
        'WhereIAm.view.WhereiamTab'
    ],

    config: {
        items: [
            {
                xtype: 'whereiamtab',
                title: 'Where I Am?'
            }
        ]
    }

});