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
          aqua : "#2fbdd5",
          mist : "#a3a7c3",
          amethyst :"#7e33f1",
          sunrise : "#f0b61f",
        
         light:{
          background: "#E6F0FF",
          primary:"",      
          text: "#000C46",            
          textSecondary: "#6B7280",   
           
         },
         dark:{
          background: "#0A0F1F", 
          primary:"",      
          text: "#D8D8EF",           
          textSecondary: "#94A3B8",   
                
        },       
        
      },
    },
  },
  plugins: [],
}
