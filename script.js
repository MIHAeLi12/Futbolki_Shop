function print_contact() {
    var sk="skype: helper"
    var tg="telegram: @helper"
    var tel="tel:8995345235"
    alert(sk + '\n' + tg + '\n' +tel)
}
function print_contakt2() {
    var pi=prompt("введите имя")
    var pf=prompt("введите фамилию")
    alert(pi + '\n' + pf)
}
var risolt = 0;
function rand_tshirt() {
    var  arr = ["ime/Mag/photo_1.png","ime/Mag/photo.png","ime/Mag/fut.jpg","ime/Mag/fut3.webp","ime/Mag/fut4.jpeg"];
    var id_img = ["le","ri"];
    
    for (let i = 0; i<id_img.length;i++){
        c = document.getElementById(id_img[i]);
        img = RandomElement(arr);
        c.src = img;
    }
}

function RandomElement(arr){
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function calc() {
    var a =parseFloat( prompt('введите первое число') ) ;
    var b =parseFloat( prompt('введите второе число') ) ;
    var c = a + b;
    var d = a - b;
    var t = a * b;
    var r = a / b;

    alert('сложение : ' + c);
    alert('Вычитание : ' + d);
    alert('Умножение : ' + t);
    alert('Деление : ' + r);
}


function text() {
    var text = prompt ('Введите текст : ') ;

    var l = text.length;

    var g = text[0];

    var z = text.slice(0,4);

    var k = text[text.length - 1];
    
    alert(l);
    alert(g);
    alert(k);
    alert(z);
}

function calc2 () {
    var text = prompt ('Введите текст:')
    alert ( text.indexOf ('ремень') )
}

function on_enter() {
   b = document.getElementById('Button1');
   b.style.backgroundColor = "red";
   b.style.borderRadius = "5px";
   b.style.pading = "20px";
    
}

function ocaler() {
    var g = ("Спасибо за оценку")

    alert (g)
}

function on_leave(){
    
    b = document.getElementById('Button1');
    b.style.backgroundColor = "rgb(80, 247, 80)";
    b.style.borderRadius = "5px";
    b.style.pading = "10px";
     
}

function change_syle(){
    b = document.getElementById("button2,button1,button3,button4,button5,button6");

    if ( window.getComputedStyle(b).backgroundColor == "rgb(255, 0, 0)")
    {
        b.style.backgroundColor = "green";
    }
    else 
        b.style.backgroundColor = "red";

    if (window.getComputedStyle(b).borderRadius != "0px")
    {
        b.style.borderRadius = "0px";
    }    
    else
        b.style.borderRadius = "10px";
    
    if (window.getComputedStyle(b).pading != "20px" )
    {
        b.style.pading = "20px";
    }
    else    
        b.style.pading = "5px";
} 

function korzonc() {
    b = document.getElementById("korz");
    
    if (window.getComputedStyle(b).display == block)
    {
        b.style.display = "none";
    }
    else
        b.style.display = "block";
}
function test_us() {
    var a = 10;
    var b = 20;

    if (a < b  && b == 20)
    {
        alert('Условие верно');
    }

    if (a == b  || a != 10) {
        alert('Условие неверно')
    }
}
 function test_us2 (){
    var arr = ['ref', 'fw4', 'three', 'frfre'];

    alert(arr[0]);
}

 function show_modal() {
    var modal = document.getElementById('myModal');

    if (window.getComputedStyle (modal).display == "none")
    {
        modal.style.display = "block";
    }
    else
        modal.style.display = "none";
}
function show_modal2() {
    var modal = document.getElementById('myModal2');

    if (window.getComputedStyle (modal).display == "none")
    {
        modal.style.display = "block";
    }
    else
        modal.style.display = "none";
}

function valid_form(){
    let name = document.getElementById('input_name')
    let fam = document.getElementById('input_fam')
    let mail = document.getElementById('input_mail')
    let phone = document.getElementById('input_phone')
    alert(name.value + '\n' + fam.value + '\n' + mail.value + '\n' + phone.value)
    document.getElementById('sp').innerHTML = "Имя: " + name.value 
    document.getElementById('fame').innerHTML = "Фамилия: " + fam.value 
    document.getElementById('em').innerHTML = "mail: " + mail.value 
    document.getElementById('ph').innerHTML = "Телефон: " + phone.value 
}

function te() {
    
    k = k-1
    var ids = ["star_1",
    "star_2",
    "star_3",
    "star_4",
    "star_5", ];
    
    for (let i=0;ids.length;i++)
    {
        b = ids [i]
        a = document.getElementById(b);
        a.src = "ime/Mag/star_1.png";
    }   
 
}

function star(k){
    k=k-1
    var ids = ["star_1",
    "star_2",
    "star_3",
    "star_4",
    "star_5",  ];

    b = ids[k]
    a = document.getElementById(b);
    if (a.src.indexOf("ime/Mag/star_2.png")>-1)
    {
        for (let i=0; i<=k ;i++)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src = "ime/Mag/star_1.png";  
        }
        
    }
    else
    for (let i=4; i>=k ;i--)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src = "ime/Mag/star_2.png";  
        }
}

 

 function light_Zoom() {
    b = document.getElementById("stars");

    if (window.getComputedStyle(b).widht != "75px" )
    {
        b.style.widht = "100px";
    }
    else    
        b.style.widht = "100px";
 }

 function hide() {
    document.getElementById('present').style.opacity = 1;
    document.getElementById('present').className = "animate__animated animate__bounce"

 }

setTimeout(hide, 5000)

$(function() {
	$(".g-form").submit(function (event) {
		event.preventDefault();

		// Ссылка, которую получили на этапе публикации приложения
		let appLink = "https://script.google.com/macros/s/AKfycbzzHWBXb05yAl2IEU5C6UsvdMwv04gNWMLPSaQM52lLLC_0_rV43c9Zq4zA9ujQTRPmPA/exec";

		// Сообщение при успешной отправке данных
		let successRespond = 'Сообщение успешно отправлено!';

		// Сообщение при ошибке в отправке данных
		let errorRespond = 'Не удалось отправить сообщение!';

		// Id текущей формы
		let form = $('#' + $(this).attr('id'))[0];

		// h2 с ответом формы
		let formRespond = $(this).find('.g-form__title_respond');

		// h2 с заголовком формы
		let formTitle = $(this).find('.g-form__title_main');

		// Блок прелоадера
		let preloader = $(this).find('.g-form__preloader');

		// Кнопка отправки формы
		let submitButton = $(this).find('.g-form__button');


		// FormData
		let fd = new FormData(form);


		$.ajax({

			url: appLink,
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			beforeSend: function(){

				if(fd.get('honeypot').length) {
					return false;
				} else {
					fd.delete('honeypot');
				}

  		// Показываем прелоадер
  		preloader.css('opacity', '1');

  		// Делаем неактивной кнопку отправки
  		submitButton.prop('disabled', true);

  		// валидация других полей.

  	},

  }).done(function(res, textStatus, jqXHR) {

  	if(jqXHR.readyState === 4 && jqXHR.status === 200) {

		// Прячем заголовок формы
		formTitle.css({
			'display': 'none'
		});

		// Прячем прелоадер
		preloader.css('opacity', '0');

		// Выводим ответ формы.
		formRespond.html(successRespond).css('color', '#37b599');
		
		// Возвращаем активность кнопке отправки
		submitButton.prop('disabled', false);

	  	// Очищаем поля формы
	  	form.reset();

	  } else {
	  	formTitle.css({
	  		'display': 'none'
	  	});
	  	formRespond.html(errorRespond).css('color', '#c64b4b');
	  	preloader.css('opacity', '0');
	  	setTimeout( () => {
	  		formRespond.css({
	  			'display': 'none'
	  		});
	  		formTitle.css({
	  			'display': 'block'
	  		});

	  		submitButton.prop('disabled', false);
	  	}, 5000);

	  	console.log('Гугл не ответил статусом 200');
	  }
	}).fail(function(res, textStatus, jqXHR) {
		formTitle.css({
			'display': 'none'
		});
		preloader.css('opacity', '0');
		formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
		setTimeout( () => {
			formRespond.css({
				'display': 'none'
			});
			formTitle.css({
				'display': 'block'
			});
			submitButton.prop('disabled', false); 
		}, 5000);

		console.log('Не удалось выполнить запрос по указанному в скрипте пути');
	}); 
});
}(jQuery));

function fut_hud(k)
    {
    var arr_fut = ["fut_i1", "fut_i2", "fut_i3", "fut_i4", "fut_i5", "fut_i6"]
    var stoim_p = document.getElementById("price");
    var  formno = document.getElementById("g-form-1") 
    b = arr_fut[k];
    a = document.getElementById(b);
   
    if (window.getComputedStyle(a).display == "none")
    {
        
        risolt += 499 
        a.style.display = "block";
        alert('Добавили в заказ!')
    }
    else{
        
        risolt -= 499
        a.style.display = "none";
    }   

    

    if(risolt > 0 )
    {
        formno.style.display = "block";
    }
    else{
        formno.style.display = "none"
    }
   
    stoim_p.innerHTML = risolt

    



}

    

