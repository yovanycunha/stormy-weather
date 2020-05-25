<template>
    <Content>
        <h1>Register</h1>
        <Input placeholder="Informe o seu nome" type="text" v-model="form.name" autofocus/>
        <Input placeholder="Informe o seu email" type="email" v-model="form.email"/>
        <Input type="password" v-model="form.password"/>
        <Button v-on:click="submit()" >Register</Button>
    </Content>
</template>

<script>
import { Content } from "./Signup.js";
import { Input } from "./Input.js";
import { Button } from "./Button.js";
import firebase from 'firebase';

export default {
    name: "SignUp",
    components: {
        Content,
        Input,
        Button
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