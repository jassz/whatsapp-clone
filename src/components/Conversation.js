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
`;
const Conversation = () => {
	return <Container>
		<ProfileHeader>
			<ProfileImage src="/profile/profile-1.jpeg"/>
			Naja Nadhirah
		</ProfileHeader>
		<ChatBox>
			<SearchContainer>
				<EmojiImage src="/smile.jpeg" />
				<SearchInput placeholder="Type a message">

				</SearchInput>
			</SearchContainer>
		</ChatBox>
	</Container>
}

export default Conversation;