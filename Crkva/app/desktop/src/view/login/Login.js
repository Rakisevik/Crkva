Ext.define('Crkva.view.login.Login', {
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    requires: [
        'Crkva.view.login.LoginController',
        'Crkva.view.login.LoginModel'
    ],

    controller: 'login',
    viewModel: {
        type: 'login'
    },
});
