Ext.define('Crkva.view.main.header.HeaderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.headerview',

    headerGroupHandler: function (button, state) {
        const controller = this;
        if (state) {
            controller.fireEvent('headerGroupSelectionChanged', button.name);
        }
    },
});