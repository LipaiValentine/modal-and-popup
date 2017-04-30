$('#form').validate({
	rules:{
		name:{
			required: true,
			minlength: 2
		},
		password:{
			required: true,
			minlength: 6
		}
	},
	messages:{
		name:{
			required: 'Это обязательное поле',
			minlength: 'Не менее 2 символов'
		},
		password:{				
			required: 'Это обязательное поле',
			minlength: 'Не менее 6 символов'
		}
	}
});