import Sendsay from "sendsay-api";
import { MESSAGE_SENT } from "../redux/types";
import { addToSent } from "../redux/sendMessage/sendMessage.actions"

const apiMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type !== MESSAGE_SENT) {
		return next(action);
	}

	const {
		sender: { name: senderName, email: senderEmail },
		receiver: { name: receiverName, email: receiverEmail },
		message: { subject, text },
		files,
  } = getState();

	const sendsay = new Sendsay({
		auth: {
			login: process.env.REACT_APP_LOGIN,
			password: process.env.REACT_APP_PASSWORD,
		},
	});

	sendsay
		.request({
			action: "issue.send.test",
			letter: {
				subject: `${subject}`,
				"from.name": `${senderName}`,
				"from.email": `${senderEmail}`,
				"to.name": `${receiverName}`,
				message: { text: `${text}` },
				attaches: [...files],
			},
			sendwhen: "test",
			mca: [`${receiverEmail}`],
		})
		.then(result => {
    dispatch(addToSent({id: result['track.id'], subject: `${subject}`}))
			
    });
    

	const getStatus = id => {
		const sendsay = new Sendsay();

		sendsay.request({
      
    });
	};

	next(action);
};

export default apiMiddleware;
