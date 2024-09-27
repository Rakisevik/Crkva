Ext.define('Crkva.view.main.workspace.Workspace', {
    extend: 'Ext.panel.Panel',
    xtype: 'workspace',

    requires: [
        'Crkva.view.main.workspace.map.Map',
        'Crkva.view.main.workspace.search.Search',
        'Crkva.view.main.workspace.data.Data',
        'Crkva.view.main.workspace.WorkspaceController',
        'Crkva.view.main.workspace.WorkspaceModel'
    ],

    controller: 'workspace',
    viewModel: {
        type: 'workspace'
    },

    layout: {
        type: 'card',
        deferredRender: true
    },

    items: [
        {
            xtype: 'search',
            id: WorkspaceMode.Search
        },
        {
            xtype: 'data',
            id: WorkspaceMode.Data
        },
        {
            xtype: 'map',
            id: WorkspaceMode.Map
        }
    ]
});