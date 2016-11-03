<script src="/js/instafeed.js/instafeed.min.js"></script>
<script>
    var feed = new Instafeed({
        get: 'user',
        userId: '1940995648',
        clientId: 'afd15cca7d664a1c964d54bac0488b93',
        template: '<a class="" href="{{link}}"><img src="{{image}}" /></a>',
        limit: 1,
        resolution: "standard_resolution"
    });
    feed.run();
</script>
