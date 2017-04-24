$(document).ready(function(){
  $('.delete-recipe').on('click', function(){
    let id = $(this).data('id');
    let url = '/delete/'+id;
    if(confirm('Delete Recipe?')){
      $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result){
          console.log('Deleting recipe ...');
          window.location.href = '/';
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  });
});
