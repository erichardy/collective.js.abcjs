module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        uglify: {
        	dist: {
        		options: {
        			sourceMap: true,
        			banner: '/*! abcjs.js */'
        		},
	    		files: {
	    			'main-abcjs-compiled.js': ['main-abcjs.js'],
	    		}
        	}
        },
    });


    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // CWD to theme folder
    grunt.file.setBase('./collective/js/abcjs/resources');
    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('default', ['uglifyjs']);
};
