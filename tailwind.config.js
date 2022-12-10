/** @type {import('tailwindcss').Config} */
module.exports = 
{
  //content: ['./**/*.{html,js}'],
  content: ['./index.html','./page/committee.html','./page/sponsors.html'
            ,'./page/specialSessions.html' ,'./page/authorInformation.html' , './page/program.html' ,
            './page/registration.html' ,'./page/invitedSpeakers.html' ,'./page/accomodation.html' ,
            './input.css','./page/page.css',  './main.js'],
  theme: {
    screens: {
      'tiny': '310px',
      'sm': '644px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    extend:
    {
      colors:
      {
        'dark-hover':'#C89F94'
      },
      fontFamily:
      {
        primaryFont: ['Noto Sans'],
        Karla:['Karla','sans-serif'],
      },     
    }
    
  }
}