Ext.define('Crkva.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        controller: {
            'headerview': {
                headerGroupSelectionChanged: 'setWorkspaceCard'
            }
        }
    },

    setWorkspaceCard: function (cardName) {
        const controller = this,
            vm = controller.getViewModel();

        vm.set('workspaceActiveItem', Constants.workspaceMode[cardName]);
        vm.set('sidebarActiveItem', Constants.sidebarMode[cardName]);
        vm.set('navigationActiveItem', Constants.navigationMode[cardName]);
    }
});