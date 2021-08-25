document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const ProTrackProjectVideo = document.getElementById('protrack_carousel__slide2')
    const mobileProTrackProjectVideo = document.getElementById('mobile-protrack')
    const HawkinsVideo = document.getElementById("hawkins_carousel__slide3")
    const content = document.querySelectorAll('.carousel__slide')

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
            const parent = e.target.parentElement
            if (!Array.from(parent.classList).includes('video')) {
                const media = item.childNodes[1]
                showModal(media.src, media.nodeName)
            }
        })
    }

    ProTrackProjectVideo.addEventListener('click' , () => showVideo('images/ProTrack/Demo.mov'))
    mobileProTrackProjectVideo.addEventListener('click' , () => showVideo('images/ProTrack/Demo.mov'))
    HawkinsVideo.addEventListener('click', () => showVideo('images/Hawkins/Onboard.mp4'))
})

const showModal = (src, type) => {
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    const content = document.createElement(type.toLowerCase())
    content.src = src

    modal.id = 'modal'
    modal.addEventListener('click', () => modal.parentElement.removeChild(modal))

    modal.appendChild(content)
    body.appendChild(modal)
}

const showVideo = src => {
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    const content = document.createElement('video')
    content.controls = true
    content.autoplay = true
    content.loop = true
    content.src = src

    modal.id = 'modal'
    modal.addEventListener('click', () => modal.parentElement.removeChild(modal))

    modal.appendChild(content)
    body.appendChild(modal)
}
