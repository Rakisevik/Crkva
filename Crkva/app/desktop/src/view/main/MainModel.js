Ext.define('Crkva.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        workspaceActiveItem: 'mapWorkspaceMode',
        sidebarActiveItem: 'mapSidebarMode',
        navigationActiveItem: 'mapNavigationMode'
    }
});
