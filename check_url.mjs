import https from 'https';
https.request('https://raw.githubusercontent.com/gradle/gradle/v8.7.0/gradle/wrapper/gradle-wrapper.jar', { method: 'HEAD' }, (res) => {
  console.log(res.statusCode);
}).end();
