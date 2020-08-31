import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class PlanetsService {


  getPlanets() {
    // NOTE "GET" is the method to retrieve data
    api.get('planets')
      .then(res => {
        ProxyState.pnext = res.data.next
        ProxyState.planets = res.data.results.map(c => new Planet(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.pnext) {
      api.get(ProxyState.pnext)
        .then(res => {
          ProxyState.pprevious = res.data.previous
          ProxyState.pnext = res.data.next
          ProxyState.planets = res.data.results.map(c => new Planet(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.pprevious) {
      api.get(ProxyState.pprevious)
        .then(res => {
          ProxyState.pprevious = res.data.previous
          ProxyState.pnext = res.data.next
          ProxyState.planets = res.data.results.map(c => new Planet(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const planetsService = new PlanetsService();