import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Section from "./components/Section";
import Logo from "./components/Logo";
import Map from "./components/Map";
import TextContent, { InvertedTextContent } from "./components/TextContent";

const serviceEntries = [
  {
    title: "Schnitt",
    notes:
      "inkl. Beratung, Bürstenmassage, Kopf- und Nackenmassage, Haarwäsche, Styling",
    duration: "60-90 min."
  },
  {
    title: "Kreativstyling / Flechtfrisur",
    notes: "",
    duration: "30-120 min."
  },
  {
    title: "Pflanzenfarbe",
    notes:
      "inkl. Farbberatung, Bürstenmassage, Kopf- und Nackenmassage, Haarwäsche, Styling",
    duration: "60-90 min."
  },
  {
    title: "Kopf- und Nackenmassage",
    notes: "inkl. Bürstenmassage",
    duration: "15-60 min."
  },
  {
    title: "Schnitt und Farbe",
    notes: "",
    duration: "ab 90 min."
  },
  {
    title: "Augenbrauen zupfen",
    notes: "",
    duration: "5-10 min."
  }
];

const ServiceEntryWrapper = styled.li`
  margin-bottom: 24px;
  width: 50%;
  display: inline-flex;
  flex-direction: column;

  &:nth-child(odd) {
    padding-right: 12px;
  }

  &:nth-child(even) {
    padding-left: 12px;
  }
`;

const ServiceEntryTitle = styled.div`
  font-weight: bold;
`;

const ServiceEntryNotes = styled.div`
  font-style: italic;
  line-height: 24px;
  font-size: 0.9em;
`;

const ServiceEntryDuration = styled.div``;

function ServiceEntry({ title, notes, duration }) {
  return (
    <ServiceEntryWrapper>
      <ServiceEntryTitle>{title}</ServiceEntryTitle>
      {notes && <ServiceEntryNotes>{notes}</ServiceEntryNotes>}
      <ServiceEntryDuration>{duration}</ServiceEntryDuration>
    </ServiceEntryWrapper>
  );
}

const ServiceList = styled.ul`
  margin-bottom: 16px;
  list-style: none;
`;

function App() {
  return (
    <React.Fragment>
      <Section background="#f4f5f0" fullHeight>
        <Logo />
      </Section>
      <Header />
      {/*green: #ccd96b*/}
      <Section id="zu-mir">
        <TextContent>
          <h2>Zu mir</h2>
          <p>Ich nehme mir Zeit für Dich.</p>
          <p>
            Während Deines 90-minütigen Erstbesuches beim Naturfriseur Wildwuchs
            in Jena genießt Du meine ungeteilte Aufmerksamkeit. So rückst DU mit
            den individuellen Bedürfnissen deiner Haare in das Zentrum meiner
            ganzheitlichen Beratung.
          </p>
          <p>
            Ich arbeite chemiefrei und verwende für die Behandlung
            ausschließlich schadstoffreie Naturprodukte in Bioqualität.
          </p>
          <p>Deine Haut wird es Dir danken.</p>
          <p>
            Gerade wenn dich spezielle Themen beschäftigen, wie z.B. Schuppen,
            Haarausfall, feines Haar oder Neurodermitis, berate ich dich gern
            und stehe dir unterstützend zur Seite.
          </p>
          <p>
            Gerne kannst du auch Deine eigenen Produkte von Zuhause mitbringen
            und wir überprüfen gemeinsam deren Inhaltsstoffe.
          </p>
          <p>
            Als Friseurmeisterin verstehe ich es, Dich zu gegebenen Anlässen
            gezielt zu stylen. Darüber hinaus ist es mir ein Anliegen, Dir den
            passenden Haarschnitt und Deinen Haaren gezielt Ausdruck zu
            verleihen, um Deine innere Schönheit zu betonen.
          </p>
          <p>
            Bei mir bist du in guten Händen, wenn du Wert legst auf:
            <ul>
              <li>einen typgerechten Look</li>
              <li>unkompliziertes Styling</li>
              <li>individuelle, ganzheitliche Beratung</li>
              <li>einen Friseurbesuch ohne Hektik</li>
              <li>Naturprodukte</li>
              <li>einen nachhaltigen Umgang mit der Natur</li>
            </ul>
          </p>
        </TextContent>
      </Section>
      <Section background="#f4f5f0" id="service">
        <TextContent>
          <h2>Service</h2>
          <div>
            <ServiceList>
              {serviceEntries.map((entry, i) => (
                <ServiceEntry key={i} {...entry} />
              ))}
            </ServiceList>
          </div>
          <p>
            Mein Stundenhonorar beträgt 60 € inkl. gesetzl. MwSt. Ggf. zzgl.
            Materialkosten.
          </p>
        </TextContent>
      </Section>
      <Section id="kontakt">
        <TextContent>
          <h2>Kontakt</h2>
          <p>
            Kristina Mandler
            <br />
            St.-Jakob-Straße 17 
            <br />
            07743 Jena
            <br />
            Tel. 01520 6243960
          </p>
          <Map />
        </TextContent>
      </Section>
      <Section background="#605339" id="impressum">
        <InvertedTextContent>
          <h2>Impressum</h2>
          <p>
            Naturfriseur Wildwuchs
            <br />
            Kristina Mandler
            <br />
            St.-Jakob-Straße 17 
            <br />
            07743 Jena
            <br />
            info@naturfriseur-wildwuchs.de 
            <br />
            Tel. 01520 6243960
          </p>
        </InvertedTextContent>
      </Section>
    </React.Fragment>
  );
}

export default App;
