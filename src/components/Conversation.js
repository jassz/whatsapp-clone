import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex: 2;
background-color: lightgrey;
`

const Conversation = () => {
	return <Container>
		This is conversation listing
	</Container>
}

export default Conversation;