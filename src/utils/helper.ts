import {WebService, WebServiceName} from "@src/types";
import {author} from "@author";

export function getWebService(name: WebServiceName){
  return author.webServices.find(service => service.name == name)
}

export function createWebServicesMap(webServices: WebService[]): Map<WebServiceName, WebService> {
  return new Map(webServices.map(service => [service.name, service]));
}
