$(document).ready(function(){

	var resumen = $('resumen');
	var sensacion = $('#sensacion');
	var probabilidad = $('#probabilidad');
	var humedad = $('#humedad');
	var imagen = $('.img-responsive');
	var escondido = $('#escondido');

	var url = 'https://api.darksky.net/forecast/';
	var key = '51138ace5b2d2c125a0357c4a395eeed';
	var coords = {
		des1: '49.9806625,9.13555539999993',
		des2: '55.17883,10.52420200000006',
		des3: '47.124985,0.053684999999973115',
		des4: '33.5570691,35.37294799999995',
		des5: '33.4501738,129.96813350000002',
		des6: '59.3715639,28.218812200000002',
	}

	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es' , 'units=auto']

	var image = {
		'clear-day' : 'images/sunny.png',
		'partly-cloudy-day' : 'images/rainy.png',
	}


	$('#select1, #select2').on('change', function(){
		$.ajax({
			url: url + key  + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&'+ queryParams[1] + '&' + queryParams[2],
			method: 'GET',
			dataType: 'jsonp'
		}).then(function(data){
			resumen.text(parseInt(data.currently.temperature) + '°' + data.currently.summary);
			sensacion.text(data.currently.apparentTemperature + '°');
			probabilidad.text(data.currently.precipProbability * 100 + '%');
			humedad.text(data.currently.humidity * 100 + '%');
			imagen.attr('src', image[data.currently.icon]);
			escondido.removeAttr('hidden');
		});
	})

	
});



		