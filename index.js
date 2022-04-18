let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let header2 = document.createElement('h3')
header2.textContent = 'Description:'
dogDetails.append(header2)

let p = document.createElement('p')
p.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(p)

let header3 = document.createElement('h3')
header3.textContent = 'Feeding Times:'
dogDetails.append(header3)

let ul = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
li1.textContent = '9:00 am'
li2.textContent = '12:00 pm'
li3.textContent = '5:00 pm'
ul.append(li1)
ul.append(li2)
ul.append(li3)
dogDetails.append(ul)