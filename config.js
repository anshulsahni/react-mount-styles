module.exports = {

  /**
   * Root directory of the js source code
   */
  ROOT_DIR: 'example/src',

  /**
   * Root directory for the app
   * @type {String}
   */
  APP_ROOT_DIR: 'example/dist',

  /**
   * name of js file to be loaded in the final project
   * @type {String}
   */
  MAIN_JS_FILE: 'main.js',

  /**
   * extensions to be used by browserify or watchify
   * @type {Array}
   */
  BUNDLING_EXTENSIONS: ['.jsx', '.js'],

  /**
   * enable or disable checking of linting errors
   * @type {Boolean}
   */
  CHECK_LINT_ERRORS: false,

};
