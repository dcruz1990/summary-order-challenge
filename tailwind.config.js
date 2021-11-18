  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       
       fontFamily: {
        'sans': ['Red Hat Display', 'Sans-serif']
       },
       extend: {
         backgroundImage: {
           'orderSummaryBackground': "url('assets/img/pattern-background-desktop.svg')"
         },
         colors: {
            pale: '#e0e8ff',
            bright: '	#3829e0',
            veryPaleBlue: '	#f5f7ff',
            desaturatedBlue: '	#7280a7',
            darkBlue: '	#1f2f56'
         },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }