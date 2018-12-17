//var frameSrc = mediaLink +'&path=/media/js/Trento_Catasto/index.html';
lizMap.addDock('threejs', '3D', 'right-dock', 'http://localhost/Apps/index.html', 'icon-globe');
//alert('ura');

lizMap.events.on({
    'uicreated':function(evt){
         //Start//
         var newHomeLink = 'http://localhost/Apps/index.html';
        // Replace home icon URL
   
        $('#button-threejs').click(function(){
        	$('#button-permaLink').click();

        	coord = $('#input-share-permalink').val();
			var getLocation = function(href) {
    		var l = document.createElement("a");
    			l.href = href;
    			return l;
			};
			var l = getLocation(coord);
			//console.log(document); 
			//console.log('host: '+l.hostname);
			//console.log('search: '+l.search);
			bbox_coord = getQueryVariable(l.search,'bbox');
        	console.log('bbox: ' + bbox_coord);
			//window.open(newHomeLink, '3D', '');
			var newWin = window.open(newHomeLink, '3D', '');
			//alert(newWin.location.href);

			newWin.onload = function() {
				localStorage.setItem("storageName",bbox_coord);
			}
  		return false;
		})
     }
});

function getQueryVariable(query,variable) {
    //var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
};

/*lizMap.events.on({
uicreated: function(e) {
var mediaLink = OpenLayers.Util.urlAppend(
lizUrls.media,
OpenLayers.Util.getParameterString(lizUrls.params)
);
var frameSrc = mediaLink +'&path=/media/js/mapnik/Cesium/Apps/index.html';
lizMap.addDock(
'threejs',
'Vue 3D',
'right-dock',
'<iframe src="' + frameSrc + '" height="800px" width="100%">',
'icon-globe'
);
}
});*/