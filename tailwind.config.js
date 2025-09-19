/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {

        colors: {
          midnight : "#000c46",
          cosmos : "#5246e0",
          cloud : "#d8d8ef",
          deepsea : "#2c2a9d",
          aqua : "#8fe0ea",
          mist : "#a3a7c3",
          amethyst :"#b99cff",
          sunrise : "#ffe27a",
        
         light:{
          background: "#F9FAFB",
          text: "#1A1A1A",            
          textSecondary: "#6B7280",   
           
         },
         dark:{
          background: "#2D2D2D",
          text: "#E0E0E0",           
          textSecondary: "#94A3B8",   
                
        },       
        
      },
    },
  },
  plugins: [],
}


//#7e33f1 (amethyst)	#b99cff
//#f0b61f (sunrise)	#ffe27a
//#2fbdd5 (aqua)	#8fe0ea