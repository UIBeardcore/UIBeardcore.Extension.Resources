/**
 * WARNING:  Register the namespace of what you are going to extend.
 */
Tridion.Type.registerNamespace("Sys.Net");

/**
 * WARNING:  Check if Object is initialized already
 */
if (Sys.Net.WebServiceProxy)
{
	/**
	 * WARNING: Hide implementation in local scope, 
	 * so it won`t mess up with other extensions, ot other variables
	 */
	(function ()
	{
		//	Clearly identify the method you override, and an extension where you are doing so.
		//	I`d suggest the following pattern "_overridden${original function name}${extension name}"
		/**
		 * Clearly identify the method you override, 
		 * and an extension where you are doing this.
		 *
		 * I`d suggest the following pattern "_overridden${original function name}${extension name}"
		 */
		var _overridden$WebServiceProxy$onComplete$UIBeardcore = Sys.Net.WebServiceProxy.onComplete;
		Sys.Net.WebServiceProxy.onComplete = function WebServiceProxy$onComplete$UIBeardcore(request)
		{
			/**
			 * INFO: Depending from your needs, you might want to execute your code 
			 * before original function execution..
			 */
			console.log("Before: " + request && request.url);

			/**
			 * WARNING: Use apply(this, arguments) unless you don`t want to modify arguments.
			 */
			var result = _overridden$WebServiceProxy$onComplete$UIBeardcore.apply(this, arguments);

			/**
			 * .. or after it was executed
			 */
			console.log("After: " + request && request.url);

			/**
			 * WARNING: Check an initial implementation!
			 * if execution result has to be returned, in our case we don`t have to.
			 */

			//return result;
		};
	})();
}