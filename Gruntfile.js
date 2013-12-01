module.exports = function ( grunt ) {

    grunt.initConfig ({
      compass: {
        rapid: {
          options: {
            sassDir: 'styles/src',
            cssDir: 'styles',
            outputStyle: 'expanded',
            //imagesDir: '../client/assets/images',
            relativeAssets: true
          }
        }
      },

      watch: {
          css : {
              files: ['styles/src/**/*.scss'],
              tasks: ['css']
          },
          html: {
            files: ['index.html'],
            tasks: []
          },
          js: {
            files: ['js/src/**/*.js'],
            tasks: ['js']
          },
          options: {
            livereload: true
          }
      },
      concat: {
        options: {
          separator: ';',
        },
        js: {
          src: ['js/src/**/*.js'],
          dest: 'js/script.js',
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '.',
            keepalive: false,
            open: true
          }
        }
      }
    });

    grunt.registerTask('css', ['compass:rapid'] );
    grunt.registerTask('js', ['concat:js']);
    grunt.registerTask('default', ['connect', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
