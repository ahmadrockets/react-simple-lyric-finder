import React from "react";
import { ArtistProvider } from "../ArtistContext";
import ArtistResultPage from "./ArtistResultPage";
import ArtistForm from "./ArtistForm";

const ArtistPage = () =>{
    return(
      <>
        <br />
        <h2>ARTIST PAGE</h2>
        <ArtistProvider>
          <ArtistForm />
          <br />
          <ArtistResultPage />
        </ArtistProvider>
        </>
    )
  }
  export default ArtistPage;