document.addEventListener('DOMContentLoaded', () => {
	const details = document.querySelector('header details')
	const links = details.querySelectorAll('a')

	links.forEach((link) => {
		link.addEventListener('click', () => {
			details.removeAttribute('open') // Fecha o menu
		})
	})
})
