<template>
  <div>
    <form>
      <label for="email">Adresse email :</label>
      <input type="text" name="email" placeholder="Email"><br>

      <label for="password">Mot de passe :</label>
      <input type="password" name="password" placeholder="Mot de passe"><br>
      <button>Se connecter</button>
    </form>
    <p>Mot de passe oublié ?</p>
    <p>Pas de compte ?</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Signin extends Vue {

}
</script>
