module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              presets: ["es2015", "react"]
            }]
          ]
        },
        files: {
          "./dist/app.js": ["./src/main.js"]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 1337,
          hostname: 'localhost',
          livereload: 9000
        }
      }
    },

    watch: {
      scripts: {
        files: ["src/**/*.js"],
        tasks: ["browserify"],
        options: {
          livereload: {
            port: 9000
          }
        }
      }
    }
  });

  grunt.registerTask("default", ["browserify", "connect", "watch"]);
};
