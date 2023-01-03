// var request = require('request');
// const prompt = `Explaine about HTML`;

// (async () => {
//   const url = 'https://api.openai.com/v1/engines/davinci/completions';
//   const params = {
//     "prompt": prompt,
//     "max_tokens": 160,
//     "temperature": 0.7,
//     "frequency_penalty": 0.5
//   };
//   const headers = {
//     'Authorization': `Bearer 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`,
//   };

//   try {
//     request.post(
//         url,
//         { json: params, headers: headers },
//         function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body.choices[0].text);
//             }
//         }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// })();



// ##############################################################################################



// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer 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");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "prompt": "Explaine about HTML",
//   "max_tokens": 160,
//   "temperature": 0.7,
//   "frequency_penalty": 0.5
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://api.openai.com/v1/engines/davinci/completions", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));