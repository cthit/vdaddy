export function base64(input: string) {
    const strippedInput = input.replace(/((?=[^\+#])\W)/g,"");
    if(typeof window === "undefined"){
        return Buffer.from(strippedInput).toString("base64")
    }
    return window.btoa(strippedInput)
  
}