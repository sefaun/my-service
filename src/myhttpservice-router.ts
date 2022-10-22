import { RouterPayload } from "./data/types"


class MyHTTPServiceRouter {

  private slicer = Array.prototype.slice
  public routers: RouterPayload[] = []

  public get() {
    this.routers.push({
      method: "GET",
      path: this.slicer.call(arguments)[0],
      functions: this.slicer.call(arguments).slice(1, this.slicer.call(arguments).length)
    })
  }

  public post() {
    this.routers.push({
      method: "POST",
      path: this.slicer.call(arguments)[0],
      functions: this.slicer.call(arguments).slice(1, this.slicer.call(arguments).length)
    })
  }

  public put() {
    this.routers.push({
      method: "PUT",
      path: this.slicer.call(arguments)[0],
      functions: this.slicer.call(arguments).slice(1, this.slicer.call(arguments).length)
    })
  }

  public delete() {
    this.routers.push({
      method: "DELETE",
      path: this.slicer.call(arguments)[0],
      functions: this.slicer.call(arguments).slice(1, this.slicer.call(arguments).length)
    })
  }

  public use(...[]: Iterable<Function>) {
    this.routers.push({
      functions: this.slicer.call(arguments)
    })
  }

}

export const routes = new MyHTTPServiceRouter()