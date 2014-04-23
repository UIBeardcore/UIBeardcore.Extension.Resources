Tridion.Type.registerNamespace("Sys.Net");

if (Sys.Net.WebServiceProxy)
{
	/**
	 * Hide implementation in local scope
	 */
	(function ()
	{
		//	Clearly identify the method you override, and an extension where you are doing so.
		//	I`d suggest the following pattern "_overridden${original function name}${extension name}"
		var _overridden$WebServiceProxy$onComplete$UIBeardcore = Sys.Net.WebServiceProxy.onComplete;
		Sys.Net.WebServiceProxy.onComplete = function WebServiceProxy$onComplete$UIBeardcore(request)
		{
			console.log(request && request.url);

			// Use apply(this, arguments) unless you don`t want to modify arguments
			var result = _overridden$WebServiceProxy$onComplete$UIBeardcore.apply(this, arguments);

			// Check an initial implementation, if execution result has to be returned, in our case we don`t have to.
			//return result;
		};
	})();
}