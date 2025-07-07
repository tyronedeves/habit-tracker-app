import { useState } from "react";
import { KeyboardAvoidingView, Platform, View  } from "react-native";
import {Button, Text, TextInput} from 'react-native-paper'


export default function AuthScreen( ) {

    const [isSignUp, setIsDignUP] = useState<boolean>(false)

    return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
        <View>
            <Text> {isSignUp ? "Create Account testing" : "welcome Back"} </Text>

           <TextInput 
           label='Email'
           placeholder="Email.com" 
           autoCapitalize="none"  
           keyboardType="email-address"
           mode="outlined"
            />
             <TextInput 
           label='Password'

           autoCapitalize="none"  
           keyboardType="email-address"
           mode="outlined"
            />
            <Button mode="contained">
               {isSignUp ? "Create Account" : "Sign In"}
            </Button>
            <Button mode="text" >
              Do you already have an account? Sign In
            </Button>
        </View>
    </KeyboardAvoidingView>
}