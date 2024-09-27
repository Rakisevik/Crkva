Ext.define('Crkva.view.main.header.HeaderView', {
    extend: 'Ext.panel.Panel',
    xtype: 'headerview',

    requires: [
        'Crkva.view.main.header.HeaderViewController',
        'Crkva.view.main.header.HeaderViewModel'
    ],

    controller: 'headerview',
    viewModel: {
        type: 'headerview'
    },

    bodyCls: 'headerview-style',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
    },
    items: [        
        {
            xtype: 'container',
            cls: 'header-image-container',
            width: 490,
            height: 65,
            items: [
                {
                    xtype: 'image',
                    src: 'resources/img/logo/spc-logo-retina.png',
                    alt: 'Crkva logo',
                    height: 55,
                    width: 150,
                    margin: '5 0 0 305'
                }
            ]
        }, 
        {
            xtype: 'box',
            flex: 1
        },
        {
            xtype: 'button',
            text: 'ПРЕТРАГА',
            name: 'search',
            height: 65,
            cls: 'header-button-style',
            enableToggle: true,
            allowDepress: false,
            toggleGroup: 'headerGroup',
            toggleHandler: 'headerGroupHandler'
        },
        {
            xtype: 'button',
            text: 'ПОДАЦИ',
            name: 'data',
            height: 65,
            cls: 'header-button-style',
            enableToggle: true,
            allowDepress: false,
            toggleGroup: 'headerGroup',
            toggleHandler: 'headerGroupHandler'
        },
        {
            xtype: 'button',
            text: 'МАПА',
            name: 'map',
            height: 65,
            cls: 'header-button-style',
            pressed: true,
            enableToggle: true,
            allowDepress: false,
            toggleGroup: 'headerGroup',
            toggleHandler: 'headerGroupHandler'
        },
        {
            xtype: 'container',
            width: 300,
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'box',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'Пријави се',
                    iconCls: 'fas fa-lock',
                    height: 65,
                    cls: 'header-button-login-style'
                }
            ]
        }, 
    ]
});