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
          }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '.',
            keepalive: true
          }
        }
      }
    });

    grunt.registerTask('css', ['compass:rapid'] );
    grunt.registerTask('default', ['css']);

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
};
