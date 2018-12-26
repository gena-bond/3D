var frameSrc = 'about:blank';
//add newDocument 
lizMap.addDock(
    'threejs', 
    '3D', 
    'right-dock', 
    '',
    //'<iframe id="receiver" src="' + frameSrc + '" height="800px" width="100%">', 
    'icon-globe');

lizMap.events.on({
    'uicreated':function(evt){
         //Start//
         var newHomeLink = 'http://www.cesium.mysite.org/Apps/index.html';
        // Replace home icon URL
        $('#button-threejs').click(function(){
            //Read bbox-from 'button'-permaLink
            var permaLink_window = $('#button-permaLink').click();
            //String link of bbox coordinates
        	bbox_link_string = $('#input-share-permalink').val();             
            
            //Function search a href element
            var getLocation = function(href) {
    		var l = document.createElement("a");
    			l.href = href;
    			return l;
			};
            
            //Выделяет только 
			var bbox_link = getLocation(bbox_link_string);
            			
            //Отделяет bbox от остальной ссылки
			bbox_coord = getQueryVariable(bbox_link.search,'bbox');
        	
            //Записывет cookie с bbox
            var cookieName = 'bbox';
            var cookieValue = bbox_coord;
            document.cookie = cookieName + "=" + cookieValue + ";domain=.mysite.org;path=/";
            //console.log('cookie = ' + document.cookie);
            
            //Открывает новое окно 
			var newWindow = window.open(newHomeLink, '3D', '');

            /*Close #button-permaLink
            newWindow.onload(function(){
                 permaLink_window.close();
            });*/
		
  		return false;
		})
     }
});

function getQueryVariable(query,variable) {
    
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
};