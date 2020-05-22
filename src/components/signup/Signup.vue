<template>
    <Content>
        <h1>Register</h1>
        <Input placeholder="Informe o seu nome" type="text"/>
        <Input placeholder="Informe o seu email" type="email"/>
        <Input placeholder="Informe uma senha" type="password"/>
    </Content>
</template>

<script>
import { Content } from "./Signup.js";
import { Input } from "./Input.js";
import firebase from 'firebase';

export default {
    name: "SignUp",
    components: {
        Content,
        Input
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            },
            error: null
        }
    },
    methods : {
        submit() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then( data => {
                    data.user
                        .updateProfile({
                            displayName: this.form.name
                        })
                        .then(()=>{})
                })
                .catch(err => {
                    this.error = err.message;
                });
        }
    }
}
</script>

<style>

</style>