document.addEventListener('DOMContentLoaded', () => {
	const details = document.querySelector('header details')
	const links = details.querySelectorAll('a')

	links.forEach((link) => {
		link.addEventListener('click', () => {
			details.removeAttribute('open') // Fecha o menu
		})
	})
})

function scrollToId(e, id) {
	e.preventDefault()
	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start' // ou 'center' / 'end' conforme necessidade
	})
}
