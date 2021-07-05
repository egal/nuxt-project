import {EventObserver} from "@egalteam/framework/compile/index";

let observer = new EventObserver()
export default (context, inject) => {
  inject('observer', (initModelName, observerEvent) => {
    observer.subscribe(initModelName, (data, actionName, modelName) => {
      let receivedData = [data[0], actionName, modelName]
      $nuxt.$emit(observerEvent, receivedData)
    })
  })
}

