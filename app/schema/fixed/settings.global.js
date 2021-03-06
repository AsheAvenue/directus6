define(function(require, exports, module) {

  "use strict";

  var settingsGlobalSchema = module.exports;

  settingsGlobalSchema.structure = [
      {id: 'site_name', ui: 'textinput', char_length: 255},
      {id: 'site_url', ui: 'textinput', char_length: 255},
      {id: 'cms_color', ui: 'color' /*, options: { options: [{title: 'Green', value: 'green'}]}*/},
      {id: 'cms_user_auto_sign_out', ui: 'numeric', char_length: 255, options: {size: 'small'}},
      {id: 'rows_per_page', ui: 'numeric', char_length: 255, options: {size: 'small'}},
      {id: 'cms_thumbnail_url', ui: 'textinput', char_length: 255}
  ];

  return settingsGlobalSchema;
});