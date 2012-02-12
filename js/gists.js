jQuery(document).ready(function(){
    fetch_gists(1, 100);
});

function fetch_gists(page, per_page){
    jQuery.getJSON(
        'https://api.github.com/users/chrisguitarguy/gists?callback=?',
        {
            'per_page': per_page,
            'page': page
        },
        function(resp) {
            var data = resp.data
            jQuery.each(data, function(index){
               jQuery('article table tbody').append('<tr id="' + this.id + '"></tr>');
               var row = jQuery('article table tr#' + this.id);
               row.append('<td><a href="' + this.html_url + '">' + this.id + '</a></td>');
               row.append('<td>' + this.description + '</td>');
               var files = this.files
               var langs = [];
               jQuery.each(files, function(index, value){
                    langs.push(value.language);
               });
               row.append('<td>' + langs.join(', ') + '</td>');
            });
            l = data.length;
        }
    );
}
