module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: ['css/*'],
            tasks: ['postcss'],
        },
        
        postcss: {
          options: {
            processors: [
              require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
            ]
          },
          dist: {
            src: 'css/main.css'
          }
        },
        
        jshint: {
            all: "js/main.js"
        }
    });
  
    //npm install grunt --save-dev
    //npm install grunt-contrib-watch --save-dev
    grunt.loadNpmTasks('grunt-contrib-watch');
    //$ npm install grunt-postcss autoprefixer-core csswring
    grunt.loadNpmTasks('grunt-postcss');
    //npm install grunt-contrib-jshint --save-dev
    grunt.loadNpmTasks('grunt-contrib-jshint');
  
    grunt.registerTask('default', ['watch']);
    
};
                     


