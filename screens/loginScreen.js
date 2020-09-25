import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
            emailId : '',
            password : '',
        }
    }

    login = async(email,password) => {
        if(email && password) {
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response) {
                    this.props.navigation.navigate('writeStroy')
                }
            }
            catch (error) {
                switch (error.code) {
                    case 'auth/use-not-found':
                        Alert.alert("user does not exist")
                        console.log("does not exist")
                        break
                        case 'auth/invalid-email':
                            Alert.alert("invalid email or password")
                            console.log("invalid")
                            break
                }
            }
        }
        else {
            Alert.alert('enter email and password')
        }
    }

    render() {
        return(
            <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20}}>
                <View>
                    <Text>Bedtime Stories</Text>
                </View>
                <View>
                    <TextInput
                     style={styles.loginBox}
                     placeholder = "abc@example.com"
                     keyBoardType = 'email-adress'
                     onChangeText={(text)=>{
                         this.setState({
                             emailId : text
                         })
                       }}
                     />

                    <TextInput
                     style={styles.loginBox}
                     secureTextEntry = {true}
                     placeholder = "Enter Password"
                     onChangeText={(text)=>{
                         this.setState({
                             password : text
                         })
                       }}
                     />
                </View>
                <View>
                    <TouchableOpacity
                     style={{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7}}
                     onPress={()=>{this.login(this.state,emailId, thiss.state.password)}}>
                     <Text style={{textAlign: 'center'}}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    }
})