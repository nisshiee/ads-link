$(function() {

    var linkPattern = /&adurl=([^&]+)/;
    var notFound = $('<span> - 解析失敗</span>');

    var addLink = function(h3) {
        var a = h3.find('a').eq(0);
        var baseHref = a.attr('href');
        var match = baseHref.match(linkPattern);
        if (match != null) {
            var realHref = decodeURIComponent(match[1]);
            var sep = $('<span> - </span>');
            var link = $('<a href="#">LP直リンク</a>');
            link.attr('href', realHref);
            h3.append(sep);
            h3.append(link);
        } else {
            h3.append(notFound);
        }
    }

    $('li.ads-ad').each(function() {
        var h3 = $(this).find('h3');
        addLink(h3);
    });
});
