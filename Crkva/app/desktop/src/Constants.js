Ext.define('Crkva.Constants', {
    singleton: true,
    alternateClassName: 'Constants',

    workspaceMode: {
        [ApplicationMode.Search]: WorkspaceMode.Search,
        [ApplicationMode.Data]: WorkspaceMode.Data,
        [ApplicationMode.Map]: WorkspaceMode.Map,
    },

    sidebarMode: {
        [ApplicationMode.Search]: SidebarMode.Search,
        [ApplicationMode.Data]: SidebarMode.Data,
        [ApplicationMode.Map]: SidebarMode.Map,
    },

    navigationMode: {
        [ApplicationMode.Search]: NavigationMode.Search,
        [ApplicationMode.Data]: NavigationMode.Map,
        [ApplicationMode.Map]: NavigationMode.Map,
    },
});