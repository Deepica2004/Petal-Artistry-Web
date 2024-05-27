import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <FormSection>
          <Title>Welcome to Petal Artistry</Title>
          <Subtitle>Please enter your details</Subtitle>
          <Form>
            <Label>First Name</Label>
            <Input type="text" placeholder="First Name" />
            <Label>Last Name</Label>
            <Input type="text" placeholder="Last Name" />
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
            <Label>Confirm Password</Label>
            <Input type="password" placeholder="Confirm Password" />
            <Button>Sign up</Button>
            <GoogleButton>
              <GoogleIcon src="google.jpg" alt="Google" />
              Sign up with Google
            </GoogleButton>
            <LoginLink>
              Already have an account? <a href="/login">Log in</a>
            </LoginLink>
          </Form>
        </FormSection>
        <ImageSection>
          <img src="flowerrr.jpg" alt="Flowers" />
        </ImageSection>
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 60%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #555;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const LoginLink = styled.div`
  text-align: center;
  color: #666;
  margin-top: 20px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default Signup;
