$('#add-user').on('click', function(event) {
    event.preventDefault();
  
    const newAccount = {
      email: $('#inputEmail').val().trim(),
      password: $('#inputPassword').val().trim()
    };
  
    if (newAccount.password.length > 0 && newAccount.email.length > 0 && newAccount.password.length) {
      $.ajax({
        type: 'POST',
        url: '/api/register',
        data: newAccount
      }).then(() => {
        window.location.href = '/';
      });
    } else {
      console.log('**Fill out entire form**');
      $('#create-err-msg').empty('').text('**Fill out entire form**');
    }
  });
  
  $('#update-user').on('click', function(event) {
    event.preventDefault();
  
    const id = $(this).data('id');
  
    // record changes************************************************************************************/
    const changeUser = {
      email: $('#inputEmail').val().trim(),
      password: $('#inputPassword').val().trim()
    };
    $('#err-msg').empty('');
    //***************************************************************************************************/
    // $('#change-user-modal')
    console.log(changeUser);
  
    if (changeUser.password.length > 0 && changeUser.email.length > 0 && changeUser.password.length) {
      $.ajax({
        type: 'PUT',
        url: `/api/user/${id}`,
        data: changeUser
      }).then((result) => {
        console.log('Updated user:', result);
  
        window.location.href = '/logout';
      });
    } else {
      console.log('**Fill out entire form**');
      $('#update-err-msg').empty('').text('**Fill out entire form**');
    }
  });
    //*********************************************************************/
  // DELETE 
  $('#delete-user').on('click', function(event) {
    event.preventDefault();
    $('#err-msg').empty('');
    $('#delete-user-modal').modal('show');
  });
  
  $('#confirm-delete').on('click', function(event) {
    event.preventDefault();
  
    const id = $(this).data('id');
  
    const deleteUser = {
      email: $('#userEmail').val().trim(),
      password: $('#userPassword').val().trim()
    };
  
    if (deleteUser.email.length > 0 && deleteUser.password.length > 0) {
      $.ajax({
        type: 'POST',
        url: '/api/user/confirm',
        data: deleteUser
      }).then((result) => {
        if (result) {
          $.ajax(`/api/user/${id}`, {
            type: 'DELETE'
          }).then(() => {
            console.log('Deleted user', deleteUser);
            // Refresh the page
            window.location.href = '/logout';
          });
        } else {
          $('#err-msg').empty('').text('Wrong credentials!');
        }
      });
    } else {
      console.log('fill out entire form');
      $('#err-msg').empty('').text('fill out entire form');
    }
  });
  //End Delete User*******************************************************************/
  $('#register').on('click', function(event) {
    event.preventDefault();
    window.location.href = '/register';
  });
  //**********************************************************************************/
  $('#login-modal').on('click', function(event) {
    event.preventDefault();
    $('#user-info').modal('show');
  });
  //**********************************************************************************/
  $('#go-home').on('click', function(event) {
    event.preventDefault();
    window.location.href = '/';
  });
  //**********************************************************************************/
  $('#login').on('click', function(event) {
    event.preventDefault();
  //**********************************************************************************/
    const user = {
      email: $('#email').val().trim(),
      password: $('#user_password').val().trim()
    };
  //**********************************************************************************/
    $.post('/api/login', user, (result) => {
      // console.log(result);
      if (result.loggedIn) {
        $(document.location).attr('href', '/example');
      } else {
        $('#login-err-msg').empty('').text(result.error);
        $('#user-info').modal('hide');
      }
    });
  });
  