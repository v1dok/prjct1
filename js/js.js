$( ".slider" ).slider({
			    animate: true,
                range: "min",
                value: 30,
                min: 0,
                max: 90,
				step: 30,
                
				//Получаем значение и выводим его на странице
                slide: function( event, ui ) {
                    $( "#slider-result" ).html( ui.value );
                },

				//обновляем скрытое поле формы, так что можно передать данные с помощью формы
                change: function(event, ui) { 
                $('#hidden').attr('value', ui.value);
                }
			
});