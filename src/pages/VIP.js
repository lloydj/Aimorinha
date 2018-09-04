import React, { Component } from "react";

export default class VIP extends Component {
  render() {
    return (
      <div>
        <h1>VIP</h1>
        <p>
        Connected with Facebook Messenger API, with specific content.
        Netlify Form
        </p>
        <form name="contact-VIP" data-netlify="true" data-netlify-honeypot="bot-field" method="post"> 
          <input name="name" placeholder="Ton Nom" type="text"/> 
          <input instagram="instagram" placeholder="identifiant Instagram" type="text"/>
          <input email="email" placeholder="votrenom@gmail.com" type="text"/>
          <textarea name="message"></textarea>
          <button>Envoyer</button> 
        </form>
      </div>
    );
  }
}
