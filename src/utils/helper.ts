import {PostItem, WebServiceName} from "@src/types";
import posts from "@contents/posts.json";
import {author} from "@author";

export function getFaviconSrcFromOrigin(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${encodeURIComponent(hostname)}`;
}

export function getWebService(name: WebServiceName){
  return author.webServices.find(service => service.name == name)
}
