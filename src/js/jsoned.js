(function($) {
    if (!$) return;
    if (!this.jsoned) this.jsoned = {};
    if (jsoned.Jsoned) return;

    jsoned.Jsoned = function(options) {
        var self = this;
        this.options = $.extend({
            saveBtnId : "saveBtn",
            loadSuccess :function(jsonString) {
                var jsonObj = JSON.parse(jsonString);
                self.editor.initEditor(self.options.template, jsonObj);
            }
        }, options);

        this.initEditor(this.options.template, this.options.value);
        this.initStorage();
        this.initControls();
    }

    jsoned.Jsoned.prototype = {
        initEditor : function(template, value) {
            this.editor = new jsoned.Editor(this.options);
            this.editor.initEditor(template, value);
        },
        initStorage : function(template) {
            this.storage = new jsoned.Storage(this.options);
            this.storage.initStorage();
        },

        initControls : function() {
            var self = this;
            $("#" + this.options.saveBtnId).click(function() {
                console.log(self.editor.buildJSONString());
            });
        }
    }

})(this.jQuery);