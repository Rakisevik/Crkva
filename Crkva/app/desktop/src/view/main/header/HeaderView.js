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
            xtype: 'button',
            text: 'here i am',
            margin: '7 1',
            height: 36,
        },
    ]
});