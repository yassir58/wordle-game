function isAlpha(char:string):boolean {
    return /^[a-zA-Z]$/.test(char);
  }


  function isUpperCaseKeyCode(keyCode:number):boolean {
    return keyCode >= 65 && keyCode <= 90;
  }
  
  // Check if a key code represents a lowercase alphabetic character
  function isLowerCaseKeyCode(keyCode:number) :boolean {
    return keyCode >= 97 && keyCode <= 122;
  }



export default isAlpha
export  {isUpperCaseKeyCode, isLowerCaseKeyCode}