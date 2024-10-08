const input = document.querySelector('#input')

const listContainer = document.querySelector('#list-container')

const addTask = document.querySelector('#add-task')


addTask.addEventListener('click', () => {

    if (input.value === '') {
        alert('Write something...')
    }
    else {
        let li = document.createElement('li')
        li.innerText = input.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    input.value = ''

})


listContainer.addEventListener('click', (e) => {

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }

})