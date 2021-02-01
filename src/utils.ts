export function base64(input: string) {
    return window.btoa(input.replace(/\W/g,""))
  
}