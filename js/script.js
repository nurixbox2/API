const API = 'https://api.github.com/users/'

const form = document.querySelector('form')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    findUsers(input.value)
})

const findUsers = async (name) => {
    let url = API + name
    const request = await fetch(url)
    console.log(request)
    const response = await request.json()
    console.log(response)
    output.innerHTML = ''
    input.value = ''
    renderUser(response)
}
const renderUser = (data) => {
    let avatar = document.createElement('img')
    avatar.src = data.avatar_url
    let name = document.createElement('h2')
    name.innerHTML = 'Name: '+ data.name
    let login = document.createElement('h3')
    login.innerHTML = 'Login: ' + data.login
    let comp = document.createElement('h3')
    comp.innerHTML = 'Company: ' + data.company
    let loc = document.createElement('h3')
    loc.innerHTML = 'Location: '+ data.location
    let urlOfUser = document.createElement('a')
    urlOfUser.href = data.html_url
    urlOfUser.textContent= 'url: ' + data.html_url
    
    output.append(avatar, name, login, comp, loc, urlOfUser)
}