// import Sendsay from 'sendsay-api'

// const sendsay = new Sendsay();


// const {
//     sender: { name: senderName, email: senderEmail },
//     receiver: { name: receiverName, email: receiverEmail },
//     message: { subject, text },
//     files, 
//   } = getState()

// const sendMssageHelper = smth => {
// sendsay
//     .login({
//       login: process.env.REACT_APP_LOGIN,
//       password: process.env.REACT_APP_PASSWORD,
//     })
//     .then(res => {
//       sendsay
//         .request({
//           action: 'issue.send.test',
//           letter: {
//             subject: subject,
//             'from.name': senderName,
//             'from.email': senderEmail,
//             'to.name': receiverName,
//             message: { text: text },
//             attaches: [...files],
//           },
//           sendwhen: 'test',
//           mca: [receiverEmail],
//         }).then(result => {
//             smth})
//         })

//         }