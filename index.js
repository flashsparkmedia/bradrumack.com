document.addEventListener('DOMContentLoaded', e => {
    const projects = document.querySelector('a[href="#projects"]')
    const projectsSection = document.getElementById('projects')
    const about = document.querySelector('a[href="#about"]')
    const aboutSection = document.getElementById('about')
    const contact = document.querySelector('a[href="#contact"]')
    const contactSection = document.getElementById('contact')
    const closeCarousel = document.querySelector('.close-carousel')
    const hawkinsCarouselIcon = document.querySelector('#hawkins .article-icons .fa.fa-image')
    const toodfrucksCarouselIcon = document.querySelector('#toodfrucks .article-icons .fa.fa-image')
    const hawkinsCarousel = document.getElementById('hawkins-carousel')
    const toodfrucksCarousel = document.getElementById('toodfrucks-carousel')

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

    closeCarousel.addEventListener('click', () => {
        const carousel = document.querySelector('.carousel-section')
        carousel.classList.add('hidden')
        carousel.classList.remove('visible')
    })

    hawkinsCarouselIcon.addEventListener('click', () => {
        hawkinsCarousel.classList.toggle('hidden')
        hawkinsCarousel.classList.toggle('visible')
    })

    toodfrucksCarouselIcon.addEventListener('click', () => {
        console.log(toodfrucksCarousel)
        toodfrucksCarousel.classList.toggle('hidden')
        toodfrucksCarousel.classList.toggle('visible')
    })
})
