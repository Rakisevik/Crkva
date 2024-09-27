Ext.define('Crkva.view.main.workspace.data.Data', {
    extend: 'Ext.panel.Panel',
    xtype: 'data',

    requires: [
        'Crkva.view.main.workspace.data.DataModel',
        'Crkva.view.main.workspace.data.DataController',
    ],

    controller: 'data',
    viewModel: {
        type: 'data'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Подаци</div>'
        }
    ],
});
