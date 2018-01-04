import { helper } from '@ember/component/helper';

export function textLimit([text]) {
  if (text.length > 25){
    return text.substring(0, 20) + " ...";
  } else {
    return text;
  }
}

export default helper(textLimit);
