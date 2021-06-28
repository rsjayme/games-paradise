function Trim(strTexto: string) {
  return strTexto.replace(/^\s+|\s+$/g, '');
}

function IsCEP(strCEP: string) {
  let objER = /^[0-9]{2}[0-9]{3}-[0-9]{3}$/;

  strCEP = Trim(strCEP);
  console.log(strCEP);
  if (strCEP.length > 0) {
    if (objER.test(strCEP)) return true;
    else return false;
  } else return false;
}

export { IsCEP };
