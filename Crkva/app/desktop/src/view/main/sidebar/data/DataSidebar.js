Ext.define('Crkva.view.main.sidebar.data.DataSidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'datasidebar',

    requires: [
        'Crkva.view.main.sidebar.data.DataSidebarModel',
        'Crkva.view.main.sidebar.data.DataSidebarController',
    ],

    controller: 'datasidebar',
    viewModel: {
        type: 'datasidebar'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Подаци сајдбар</div>'
        }
    ],
});
