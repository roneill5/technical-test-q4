var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
            '<article class="reports_item">' +
            '{{#documents}}' +
            '<a href="{{url}}" target="_blank">' + // Change here: href="{{url}}"
            '{{/documents}}' +
            '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" title="{{title}} Cover"/>' +
            '</a>' +
            '<footer class="reports_docs">' +
            '{{#documents}}' +
            '<h3 class="reports_title">' +
            '<a href="{{url}}" target="_blank" title="{{title}}">{{title}} <span>({{file_size}} {{file_type}})</span></a>' +
            '</h3>' +
            '{{/documents}}' +
            '</footer>' +
            '</article>' +
            '{{/.}}'
        )
    },

    init: function () {
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();
