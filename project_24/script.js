const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nome = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://img.youtube.com/vi/sZkY7PO8bo8/maxresdefault.jpg" alt=""/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, maiores'
  profile_img.innerHTML = '<img src="https://i.mydramalist.com/rPnem_5_c.jpg" alt="">'
  nome.innerHTML = 'Gawin Caski'
  date.innerHTML = 'Jul 11, 2023'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

  animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}