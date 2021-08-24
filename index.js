document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const ProTrackProjectVideo = document.getElementById('protrack_carousel__slide2')
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

    ProTrackProjectVideo.addEventListener('click' , showVideo)

    for (const item of content) {
        item.addEventListener('click', e => showModal(e.target.src, e.target.nodeName))
    }
})

const showModal = (src, type) => {
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

const showVideo = () => {
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    const content = document.createElement('video')
    content.controls = true
    content.autoplay = true
    content.src = 'images/ProTrack/Demo.mov'

    modal.id = 'modal'
    modal.addEventListener('click', () => modal.parentElement.removeChild(modal))

    modal.appendChild(content)
    body.appendChild(modal)
}
