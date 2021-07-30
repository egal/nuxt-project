import { EventObserver, Model } from '@egalteam/framework/compile/index'

export default class EgalConstructor extends Model {
  modelName: string
  model: any
  emitName: string
  $root
  listenerFunction: Function
  observer: EventObserver = EventObserver.getInstance()

  constructor(modelName:string, emitName:string, $root:any, listenerFunction:Function) {
    super(modelName, process.env.VUE_APP_USERNAME, process.env.VUE_APP_PASSWORD)
    this.modelName = modelName
    this.emitName = emitName
    this.$root = $root
    this.listenerFunction = listenerFunction
    this.initNewModel()
  }

  initNewModel() {
    this.model = new Model(
      this.modelName,
      process.env.VUE_APP_USERNAME,
      process.env.VUE_APP_PASSWORD,
    )
    this.model.setBaseUrl(process.env.API_BASE_URL, 'axios')
  }

  emitModelEvent() {
    this.observer.subscribe(this.modelName, (data:any, actionName:string, modelName:string) => {
      let receivedData = [data[0], actionName, modelName]
      this.listenerFunction(receivedData)
    })
  }

  unsubscribe() {
    this.observer.unsubscribe(this.modelName)
  }
}
