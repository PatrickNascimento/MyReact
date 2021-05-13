import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Button
} from 'react-native'

import {
  Input,
  Card,
  Icon,
  Avatar
} from 'react-native-elements'

import {Item,Label} from 'native-base'

export default class cadastroUsuario extends Component {
  static navigationOptions = {
    title: 'Cadastro de Usuário',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#e74c3c',
            borderBottomColor: '#fff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };

  componentesTelaCadUsu() {
    return (
      <KeyboardAvoidingView
        behavior="position"
      >
        <ScrollView>
          <View style={{ marginTop: "15%" }}>
            <Card
              title="Informe Seus Dados"
              
              containerStyle={{ 
                backgroundColor:"rgba(255, 234, 167,0.5)", 
                borderColor:"#d35400" ,
                borderWidth:3
              }
                
              }
              
                
              titleStyle={{ color: "rgba(44, 62, 80,1.0)", fontSize: 20 }} 
            >
              <View style={estiloCadUsuario.viewPrincipal}>
              
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Digite seu Nome"
                    leftIcon={<Icon name="user" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    placeholderTextColor="black"
                  />
                </View>
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Digite um nome para Login"
                    leftIcon={<Icon name="user-circle" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    placeholderTextColor="black"
                  />
                </View>
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Digite seu Telefone"
                    leftIcon={<Icon name="phone" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    placeholderTextColor="black"
                    keyboardType="numeric"
                  />
                </View>
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Digite seu email"
                    leftIcon={<Icon name="envelope" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    placeholderTextColor="black"
                    keyboardType="email-address"
                  />
                </View>
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Digite sua Senha"
                    leftIcon={<Icon name="key" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    secureTextEntry={true}
                    placeholderTextColor="black"
                  />
                </View>
                <View style={estiloCadUsuario.viewComponentes}>
                  <Input
                    inputStyle={{ fontSize: 22, color: "rgba(44, 62, 80,1.0)" }}
                    placeholder="Repita sua Senha"
                    leftIcon={<Icon name="key" type="font-awesome" color="rgba(44, 62, 80,1.0)" />}
                    secureTextEntry={true}
                    placeholderTextColor="black"
                  />
                </View>
                <View style={{marginRight:"9%", marginTop:30}}>
                    <Button
                      title="Cadastrar"
                      color="rgba(231, 76, 60,1.0)"
                    />
                </View>
              </View>
              
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  render() {
    return (
      <ImageBackground
        source={require('../imgs/fundoColor.jpg')}
        style={estiloCadUsuario.container}
      >
        {this.componentesTelaCadUsu()}
      </ImageBackground>
    )
  }
}

const estiloCadUsuario = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  viewPrincipal: {
    marginLeft: "10%"
  },
  viewComponentes: {
    marginTop: 35
  }
})
