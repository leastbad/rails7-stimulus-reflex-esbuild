import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect () {
    console.log('foobar')
    this.element.textContent = 'Hello World!'
  }
}
