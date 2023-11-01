import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactList";

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex: 2;
background: #f6f7f8;
`;

const ProfileHeader=styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 19px;
align-items: center;
gap: 10px;
`;


const ProfileImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox=styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom: 0;
`;

const EmojiImage = styled.img`
width: 28px;
height: 28px;
opacity: 0.4;
cursor: pointer;
padding-left: 10px;
`;

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5dbb5;
`;

const MessageDiv = styled.div`
justify-content: ${props => props.isYours ? 'flex-end' : 'flex-start'};
display: flex;
margin: 5px 16px;
`;

const Message = styled.div`
background: ${props => props.isYours ? '#daf8cb' : 'white'};
// background: #daf8cb;
max-width: 50%;
color: #303030;
padding: 8px 10px;
font-size: 14px;
border-radius: 8px;
`;
const Conversation = () => {
	return <Container>
		<ProfileHeader>
			<ProfileImage src="/profile/profile-1.jpeg"/>
			Naja Nadhirah
		</ProfileHeader>
		<MessageContainer>
			<MessageDiv isYours={true}>
				<Message isYours={true}>Hello</Message>
			</MessageDiv>
			<MessageDiv isYours={false}>
				<Message isYours={false}>Hello</Message>
			</MessageDiv>
			<MessageDiv isYours={true}>
				<Message isYours={true}>Hello</Message>
			</MessageDiv>
		</MessageContainer>
		<ChatBox>
			<SearchContainer>
				<EmojiImage src="/smile.jpeg" />
				<SearchInput placeholder="Type a message" />
			</SearchContainer>
		</ChatBox>
	</Container>
}

export default Conversation;