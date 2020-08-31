export default class Planet {
  constructor({name, climate, population}) {
    this.name = name
    this.climate = climate
    this.pop = population
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.climate} - population ${this.pop}
      </div>
    </div>
    `
  }
}