document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const hawkinsFilmIcon = document.querySelector('#hawkins .article-icons .fa.fa-film')
    const content = document.querySelectorAll('.content')

    projects.addEventListener('click', e => {
        e.preventDefault()
        projectsSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    })
    
    about.addEventListener('click', e => {
        e.preventDefault()
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        })
    })

    contact.addEventListener('click', e => {
        e.preventDefault()
        contactSection.scrollIntoView({
            behavior: 'smooth'
        })
    })

    for (const item of content) {
        item.addEventListener('click', e => {
            console.log(e.target)
            showModal(e.target.src, e.target.nodeName)
        })
    }
})

const showModal = (src, type) => {
    console.log(src)
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    const content = document.createElement(type.toLowerCase())
    content.src = src

    modal.id = 'modal'
    modal.addEventListener('click', () => modal.parentElement.removeChild(modal))

    modal.appendChild(content)
    console.log(modal)
    body.appendChild(modal)
}