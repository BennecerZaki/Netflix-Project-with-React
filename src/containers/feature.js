import React from "react";
import { OptForm, Feature } from "../components";

export default function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      <OptForm>
        <OptForm.Input placeholder="Email adress" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Feature>
  );
}
