/*
 * File: app/view/WhereiamTab.js
 * @author John Yin <john.yin@ebizdesigner.com>
 */

Ext.define('WhereIAm.view.WhereiamTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.whereiamtab',

    config: {
        ui: 'light',
        tabBar: {
            docked: 'top'
        },
        items: [
            {
                xtype: 'container',
                title: 'Address',
                activeItem: 1,
                id: 'addressTab',
                ui: 'dark',
                layout: {
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'home',
                        html: '<br /><h1>Welcome to "Where I Am!"</h1> <p>One Sencha Touch 2 Mobile App!</p> <img height=150 src="http://staging.sencha.com/img/sencha.png" /> <p>Press \'My Position\' to acquire your device\'s current location in latitude/longitude, and real world address (street, city, etc) using Google\'s GeoLocate API. <br/><small> Author: <a href="http://www.ebizdesigner.com" target="_blank" > John Yin <small> 2013 <p> ',
                        id: 'welcomePanel',
                        layout: {
                            type: 'fit'
                        }
                    },
                    {
                        xtype: 'container',
                        id: 'addressListContainer',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'list',
                                id: 'addresslist',
                                itemTpl: [
                                    '<div> {item} : {value}</div>'
                                ],
                                store: 'addressStore'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                id: 'mypositionbtn',
                                iconCls: 'search',
                                text: 'My Position'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                title: 'Map',
                id: 'detailMap'
            }
        ]
    }

});