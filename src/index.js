document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.new_task_description.value) 
    form.reset()
  })
});
document.addEventListener('DOMContentLoaded', () => {
  let form1 = document.getElementById('create_users_form')
  form1.addEventListener('submit', (e) => {
    e.preventDefault()
    createUser(e.target.new_users_description.value)
    form1.reset()
  })
})

function createUser(user){
  let userName = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)

  userName.textContent=`${user} `
  button.textContent = 'x'

  userName.appendChild(button)
  document.querySelector('#user').appendChild(userName)
}
function buildTask(task){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)

    btn.textContent = 'x'
    li.textContent = `${task} `

    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
