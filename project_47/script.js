const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'My School President',
    position: 'Boys Love',
    photo: 'https://i.pinimg.com/564x/6b/ef/bc/6befbc91f934d323217156e7048f0f11.jpg',
    text: 'Just a beautiful boys love history.'
  },
  {
    name: 'Sotus',
    position: 'Boys Love',
    photo: 'https://i.pinimg.com/564x/60/9d/73/609d734be811d52ede36e787f6d1d6bd.jpg',
    text: 'Just a beautiful boys love history. With Singto and Krist.'
  },
  {
    name: 'La Pluie',
    position: 'Boys Love',
    photo: 'https://i.pinimg.com/564x/4a/4f/fc/4a4ffc35a74c3755c7f6380ab2476174.jpg',
    text: 'An amazing beautiful boys love history. About people who have the perfect one.'
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)