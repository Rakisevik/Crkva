Ext.define('Crkva.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.layout.container.Border',
        'Crkva.view.main.MainController',
        'Crkva.view.main.MainModel',
        'Crkva.view.main.header.HeaderView',
        'Crkva.view.main.workspace.Workspace',
        'Crkva.view.main.sidebar.Sidebar',
        'Crkva.view.main.navigation.Navigation'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
    items: [
        {
            region: 'north',
            xtype: 'headerview'
        },
        {
            region: 'center',
            xtype: 'workspace',
            bind: {
                activeItem: '{workspaceActiveItem}'
            }
        },
        {
            region: 'east',
            xtype: 'sidebar',
            bind: {
                activeItem: '{sidebarActiveItem}'
            }
        },
        {
            region: 'west',
            xtype: 'navigation',
            bind: {
                activeItem: '{navigationActiveItem}'
            }
        }
    ]
});