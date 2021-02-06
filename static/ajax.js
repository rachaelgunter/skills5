const formData = {

    'human-id' : $('#type-field').val(),
  };

$.get('/api/human/<human_id>', formData, (res) => {
    
    $('').html('human-id'),
    $('').html('fname'),
    $('').html('lname'),
    $('').html('email')
  });
  
const formInputs = {
    'human-id' : $('#type-field').val(),
    'fname': $('#type-field').val(),
    'lname': $('#type-field').val(),
    'email': $('#type-field').val()
  };


wordForm.addEventListener('submit' (evt) => {

    human.human_id;
});

