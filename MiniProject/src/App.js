import React from 'react';
import { StatusBar } from 'react-native';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './components/Input';

// SafeAreaView : 노치 영역을 위해 뷰에 여백을 만들어준다.
const Container = styled.SafeAreaView`  
    flex : 1;
    background_color : ${({theme}) => theme.background};
    align-item : center;
    justify-content : flex-start;
`;

// const Container = styled.View`
//     flex : 1;
//     background_color : ${({theme}) => theme.background};
//     align-item : center;
//     justify-content : flex-start;
// `;

const Title = styled.Text`
    font-size : 30px;
    font-weight : 600;
    color : ${({theme}) => theme.main};
    align-self: flex-start;
    margin : 0;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>

                {/* 상단바 속성 변경 (bg색상은 안드로이드만 됨) */}
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={theme.background}
                />

                <Title>My Schedule</Title>
                <Input />
                <Input />
            </Container>
        </ThemeProvider>
    );
};

export default App;