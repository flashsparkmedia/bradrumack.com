document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const hawkinsFilmIcon = document.querySelector('#hawkins .article-icons .fa.fa-film')
    const toodfrucksFilmIcon = document.querySelector('#toodfrucks .article-icons .fa.fa-film')
    const videoModal = document.getElementById('video-modal')
    const videoElement = document.querySelector('#video-modal video')

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

    videoModal.addEventListener('click', () => {
        videoElement.pause()
        toggleModal()
    })

    hawkinsFilmIcon.addEventListener('click', () => {
        videoElement.setAttribute('src', 'https://s3-us-west-1.amazonaws.com/bradrumack.com/hawkinsvideo.mov')
        toggleModal()
        videoElement.play()
    })

    toodfrucksFilmIcon.addEventListener('click', () => {
        videoElement.setAttribute('src', 'https://s3-us-west-1.amazonaws.com/bradrumack.com/toodfrucks.mov')
        toggleModal()
        videoElement.play()
    })
})

const toggleModal = () => {
    const videoModal = document.getElementById('video-modal')
    videoModal.classList.toggle('hidden')
    videoModal.classList.toggle('visible')
}
