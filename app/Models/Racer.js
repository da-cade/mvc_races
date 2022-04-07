
export class Racer {
  constructor(name, id, icon) {
    this.name = name
    this.id = id
    this.icon = icon
    this.position = 0
  }

  get Template(){
    return /*html*/ `
    <div class="col-12 d-flex mb-1">
      <p class="racer-label me-2 m-0" id="${this.id}-tag">${this.name}</p>
      <div class="racer-row bg-warning">
        <span class="ps-1" id="${this.id}-lane">
          <i class="${this.icon} drive" id="${this.id}"></i>
        </span>
      </div>
    </div>
    `
  }

  get Move(){
    // let randInt = Math.floor(Math.random() * 4)
    // this.position += randInt
    // document.getElementById(r.id).style.paddingLeft = r.position + '%'
  }
}