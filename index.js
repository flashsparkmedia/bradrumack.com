document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const carousel = document.getElementById('carousel-section')
    const toodfrucksCarouselIcon = document.querySelector('#toodfrucks .article-icons .fa-image')
    const hawkinsCarouselIcon = document.querySelector('#hawkins .article-icons .fa-image')

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

    carousel.addEventListener('click', () => {
        toggleCarousel()
    })

    toodfrucksCarouselIcon.addEventListener('click', () => [
        toggleCarousel()
    ])

    hawkinsCarouselIcon.addEventListener('click', () => {
        toggleCarousel()
    })

})

const toggleCarousel =  () => {
    document.getElementById('carousel-section').classList.toggle('visible')
}

