import {
  Selector
} from 'testcafe';
import {
  ClientFunction
} from 'testcafe';

export default class Functions {
  constructor() {

    this.getPageUrl = ClientFunction(() => window.location.href);

    this.goBack = ClientFunction(() => window.history.back());
    //await func.goBack();

    this.getRequestResult = ClientFunction(url => {
      return new Promise(resolve => {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = function () {
          resolve(xhr.status);
        };

        xhr.send(null);
      });
    });

  }
}
