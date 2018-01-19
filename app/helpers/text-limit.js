import { helper } from '@ember/component/helper';

export function textLimit([text]) {
  if (text.length > 20){
    return text.substring(0, 17) + " ...";
  } else {
    return text;
  }
}

export default helper(textLimit);
