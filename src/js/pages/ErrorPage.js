'use strict';

const template = require('../../views/pages/ErrorPage.hbs');

class ErrorPage {
	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('error-page-container');

		this.render();
	}

	render() {
		this.container.innerHTML = template();
	}

	show(error) {
		this.container.classList.add('show');
		let errorMessage = this.container.querySelector('.error-message');

		if (error.message === 'Parameter q is missing.') {
			errorMessage.innerHTML = 'You must type a city name.';
		} else {
			errorMessage.innerHTML = error.message;
		}
	}

	hidden() {
		this.container.classList.remove('show');
	}
}
module.exports = ErrorPage;
