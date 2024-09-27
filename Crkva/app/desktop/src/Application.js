Ext.define('Crkva.Application', {
	extend: 'Ext.app.Application',
	name: 'Crkva',

	requires: [
		'Crkva.view.main.Main',
		'Crkva.view.login.Login',
		'Crkva.enum.WorkspaceMode',
		'Crkva.enum.ApplicationMode',
		'Crkva.enum.SidebarMode',
		'Crkva.enum.NavigationMode',
		'Crkva.Constants'
	],

	launch: function () {
		Ext.ariaWarn = Ext.emptyFn
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)

		Ext.create({ xtype: 'main', plugins: 'viewport' })
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
