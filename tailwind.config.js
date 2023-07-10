/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium','sans-serif'],
        'gilroy-reguler' : ['Gilroy-Regular', 'sans-serif'],
        'hind-Jalandhar': ['Hind Jalandhar', 'sans-serif'],
        'poppins' : ['poppins'], 
        'gilda-display' : ['Gilda Display']                                  
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        warna1 : {"warna1":"#FFAF6E"},
        warna2 : {"warna2":"#FDF9E5"},
        warna3 : {"warna3":"#FFAF6E"}
      },
      
      margin:{
        '5000px' : '0px',
        '1000px' : '1000px',
        '493px' : '493px',
        '180px' :  '180px'
      },
      width:{
        '1081px' : '1081px',
        '350px' : '350px',
        '716px' : '716px'
      },
      height:{
        '1287px' :  '1287px',
        '350px' : '350px',
        '800px' : '800px',
        '500px' : '500px'
      },
      minHeight:{
        '800px' : '800px'
      },
      minWidth:{
        '900px' : '900px',
        '716px' : '716px'
      },
      backdropBlur:{
        '200px' : '200px'
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}

