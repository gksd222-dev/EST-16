

export function copyClipboard(text) {

  return navigator.clipboard.writeText(text).then // [[Promise Object]]

}