module.exports = function ( grunt ) {

    grunt.initConfig ({
        compass: {
            rapid: {
                options: {
                    sassDir: 'styles/src',
                    cssDir: 'www/styles',
                    outputStyle: 'expanded',
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
                files: ['templates/**/*.html', 'content/**/*.md'],
                tasks: ['bear:dev']
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
                dest: 'www/js/script.js',
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'www/',
                    keepalive: false,
                    open: true
                }
            }
        },
        cssmin: {
            minify: {
                files: {
                    'www/styles/style.css': ['www/styles/style.css']
                },
                options: {
                    report: 'gzip'
                }
            }
        },
        bear: {
            dev: {
                options: {
                    domain: "localhost:9001"
                }
            },
            dist: {
                options: {
                    domain: "//www.protoandtype.com"
                }
            },
            options: {
                domain: "//www.protoandtype.com/",
                basePath: "/",
                templates: "templates/",
                content: "content/",
                www: "www/",
                navigation: [
                    {
                        title: "Startseite",
                        url: " "
                    },
                    {
                        title: "About",
                        url: "about"
                    },
                    {
                        title: "Blog",
                        url: "articles"
                    }
                ]
            }
        },
        clean: ["www"]
    });

    grunt.registerTask('css', ['compass:rapid'] );
    grunt.registerTask('js', ['concat:js']);
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['clean', 'js', 'css', 'bear', 'cssmin']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bear');
};
