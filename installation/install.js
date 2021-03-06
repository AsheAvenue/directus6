$(window).ready(function() {

  switch(step) {
    case 1:
      CheckStep1();
      break;
    case 2:
      CheckStep2();
      break;
    case 3:
      CheckStep3();
      break;
    case 4:
      CheckStep4();
      break;
  }

  $('input').change(function(e) {
    switch(step) {
      case 1:
        CheckStep1();
        break;
      case 2:
        CheckStep2();
        break;
      case 3:
        CheckStep3();
        break;
      case 4:
        CheckStep4();
        break;
    }
  });

  function CheckStep1() {
    var name = $('input[name=site_name]').val();
    var path = $('input[name=directus_path]').val();
    var email = $('input[name=email]').val();
    var pass = $('input[name=password]').val();
    var passconfirm = $('input[name=password_confirm]').val();

    if(name && email && pass && passconfirm && pass === passconfirm) {
      $('button[type=submit]').removeClass('disabled');
    } else {
      $('button[type=submit]').addClass('disabled');
    }
  }
  function CheckStep2() {
    var name = $('input[name=host_name]').val();
    var user = $('input[name=username]').val();
    var pass = $('input[name=password]').val();
    var dbname = $('input[name=db_name]').val();

    if(name && user && pass && dbname) {
      $('button[type=submit]').removeClass('disabled');
    } else {
      $('button[type=submit]').addClass('disabled');
    }
  }
  function CheckStep3() {
    var defaultDest = $('input[name=default_dest]').val();
    var defaultUrl = $('input[name=default_url]').val();
    var thumbDest = $('input[name=thumb_dest]').val();
    var thumbUrl = $('input[name=thumb_url]').val();
    var tempDest = $('input[name=temp_dest]').val();
    var tempUrl = $('input[name=temp_url]').val();

    if(defaultDest && defaultUrl && thumbDest && thumbUrl && tempDest && tempUrl) {
      $('button[type=submit]').removeClass('disabled');
    } else {
      $('button[type=submit]').addClass('disabled');
    }
  }
  function CheckStep4() {
    $('button[type=submit]').removeClass('disabled').html('Install').attr('name', 'install');
  }

  $('button').click(function(e) {
    if($(e.target).hasClass('disabled')) {
      e.preventDefault();
      return false;
    }
  });
  var fetching = false;
  $('#retryButton').click(function(e) {
    $target = $(e.target);
    if(fetching) {
      return;
    }
    fetching = true;

    $.get('config_test.php', function(res) {
      fetching = false;
      if(res === 'true') {
        $('#failSpan').html('<span class="label label-success">Yes</span>');
      }
    });
  });
});