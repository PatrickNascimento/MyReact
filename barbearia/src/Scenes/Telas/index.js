import React, { Component } from 'react'
import {
    StyleSheet,
    ImageBackground,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
} from 'react-native';

import {
    Input,
    Icon,
    SocialIcon,
    Card,
    Avatar

} from 'react-native-elements'

import {
    Container,
    Content,
    Button
} from 'native-base'


import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOfpaXC1E0V_LjXgQ8nYKyM3z2JSGhLHU",
    authDomain: "seulukinhas-a659b.firebaseapp.com",
    databaseURL: "https://seulukinhas-a659b.firebaseio.com",
    projectId: "seulukinhas-a659b",
    storageBucket: "seulukinhas-a659b.appspot.com",

};

firebase.initializeApp(firebaseConfig)

export default class telaLogin extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            email: "",
            senha: "",
            temEmail: true,
            temSenha: true
        })
    }

    static navigationOptions = {
        title: 'Login',
        headerTintColor: '#ffffff',
        headerRight: (
            <Avatar rounded size="medium" source={require('../imgs/logo1.jpeg')} />
          ),
        headerStyle: {
            backgroundColor: '#e74c3c',
            borderBottomColor: '#fff',
            borderBottomWidth: 3,
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    };

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            const { navigate } = this.props.navigation;
            if (user != null) {
                console.log(user.displayName)
                navigate("menuPrincipal")
            }
        })
    }

    registraUsuario = (email, senha) => {
        try {
            if (this.state.email != "" && this.state.senha != '') {
                firebase.auth().createUserWithEmailAndPassword(email, senha)
            } else {
                this.emailInput.shake()
                this.senhaInput.shake()
                this.setState({ temEmail: false })
                this.setState({ temSenha: false })
            }
        } catch (error) {
            console.log(error.toString())
        }
    }

    loginUsuario = (email, senha) => {
        const { navigate } = this.props.navigation;
        if (this.state.email != '' && this.state.senha) {
            try {
                firebase.auth().signInWithEmailAndPassword(email, senha).then(function (user) {
                    navigate('cadastroUsuario')
                })
            } catch (error) {
                console.log(error.toString())
            }
        } else {
            this.emailInput.shake();
            this.senhaInput.shake();
            this.setState({ temEmail: false })
            this.setState({ temSenha: false })
        }
    }

    async loginWithFacebook() {
        const { type, token } = await Expo.Facebook
            .logInWithReadPermissionsAsync('190496341660783', { permissions: ['public_profile'] })
        if (type == 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInWithCredential(credential).catch((error) => {
                console.log(error.toString())
                
            })
        }
    }

    componentesLogin() {
        return (

            <ScrollView>
                <View style={estiloIndex.ViewPrincipal}>
                    <Card
                        containerStyle={
                            {
                                marginBottom: 20,
                                backgroundColor: "rgba(255, 234, 167,0.5)"
                            }
                        }
                        title="Login"
                    >
                        <View style={estiloIndex.viewComponentes}>
                            <KeyboardAvoidingView
                                behavior="position"
                            >
                                <Input
                                    ref={input => this.emailInput = input}
                                    placeholder="Digite seu E-mail"
                                    leftIcon={<Icon name="user-circle" type="font-awesome" color="black" />}
                                    inputStyle={estiloIndex.estiloInputs}
                                    placeholderTextColor="rgba(44, 62, 80,1.0)"
                                    borderBottomColor="black"
                                    onChangeText={(email) => this.setState({ email })}
                                    errorMessage={this.state.temEmail ? true : 'Digite seu E-mail'}
                                    onSubmitEditing={() => this.senhaInput.focus()}
                                    autoFocus={true}
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <View style={estiloIndex.viewComponentes}>
                            <KeyboardAvoidingView
                                behavior="position"
                            >
                                <Input
                                    ref={input => this.senhaInput = input}
                                    placeholder="Digite Sua Senha"
                                    secureTextEntry={true}
                                    leftIcon={<Icon name="key" type="font-awesome" color="black" />}
                                    inputStyle={estiloIndex.estiloInputs}
                                    placeholderTextColor="rgba(44, 62, 80,1.0)"
                                    onChangeText={(senha) => this.setState({ senha })}
                                    errorMessage={this.state.temSenha ? true : 'Digite sua Senha'}
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <View style={{ marginTop: 20, width: "100%" }}>
                            <Button
                                full
                                rounded
                                warning
                                onPress={() => this.loginUsuario(this.state.email, this.state.senha)}
                                
                            >
                                <Text style={{ color: "#fff", fontSize: 18 }}> Acessar </Text>
                            </Button>

                            <Button
                                full
                                rounded
                                success
                                style={{ marginTop: 20 }}
                                onPress={() => this.registraUsuario(this.state.email, this.state.senha)}
                            >
                                <Text style={{ color: "#fff", fontSize: 18 }}> Cadastrar </Text>
                            </Button>

                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity>
                                    <SocialIcon
                                        title='Logar com o Facebook'
                                        button
                                        type='facebook'
                                        onPress={() => this.loginWithFacebook()}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:"row", alignSelf:"center", marginTop:10}}>
                                <TouchableOpacity style={{flexDirection :"row"}}>
                                    <SocialIcon
                                        button
                                        type='youtube'
                                        style ={{padding:18}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection :"row"}}>
                                    <SocialIcon
                                        button
                                        type='instagram'
                                        style ={{padding:18}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection :"row"}}>
                                    <SocialIcon
                                        button
                                        type='facebook'
                                        style ={{padding:18}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>

        )
    }

    render() {
        return (
            <ImageBackground
                source={require('../imgs/fundoColor.jpg')}
                style={estiloIndex.container}
            >
                <Container>
                    <Content>
                        {this.componentesLogin()}
                    </Content>
                </Container>
            </ImageBackground>
        )
    }
}

const estiloIndex = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    ViewPrincipal: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
        justifyContent: 'center',
        margin: 10,
        backgroundColor: "rgba(44, 62, 80,0.5)",
        elevation: 18
    },
    viewComponentes: {
        marginTop: 30,

    },
    estiloInputs: {
        borderBottomWidth: 1
    },
    viewLogo: {
        marginLeft: 140,
        width: "40%",
        height: "40%",
        position: "absolute",

    }

})


