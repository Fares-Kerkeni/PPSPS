// pdf.js

import React from "react";
import { Table, TR, TH, TD } from "@ag-media/react-pdf-table";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "/fonts/Roboto-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/fonts/Roboto-Bold.ttf",
      fontWeight: 700,
    },
  ],
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 25,
    fontFamily: "Roboto",
    fonctWeight: "400",
  },

  section_logo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "400",
    height: "150",
    marginBottom: 10,
  },
  section_ppsps: {
    width: "100%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#BEBEBE",
    fontWeight: "bold",
    marginBottom: 50,
    lineHeight: 1.5,
  },

  first_lettre: {
    color: "red",
  },
  container_chantier: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 100,
  },
  container_tile_chantier: {
    fontWeight: "bold",
    marginRight: 5,
  },
  numero_daffaire: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    lineHeight: 1.5,
  },
  container_tile_daffaire: {
    fontWeight: "bold",
    marginRight: 5,
  },
  title_pages_all: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 50,
  },
  title_pages: {
    backgroundColor: "#BEBEBE",
  },
  container_responsable: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 15,
  },
  container_title_organisations: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 15,
  },
  container_title_Responsable_covid: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  container_Inspection_du_travail: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_O_P_P_B_T_P: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_CRAMIF: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 100,
  },
  container_Medecine_du_travail: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_modification_evolution: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
  },
  container_sass: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  sass: {
    fontWeight: "bold",
  },
  container_responsable_entreprise: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_responsable_entreprise_info: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_sous_traitant: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_correspondant_securite: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_nature: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_Duree: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_Horaires: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  container_Effectif: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
  },
  container_title_Consign: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 25,
  },
  container_premiere_ligne: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
    marginTop: 25,
  },
  container_ligne_consigne: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
    lineHeight: 1.5,
  },
  ligne: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    borderBottom: "1px solid black",
  },
  tir: {
    marginRight: 10,
    marginLeft: 10,
  },
  ligne_sans_retour: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    fontSize: 11,
    lineHeight: 1.5,
  },
  protection_elec: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
  },
  container_title: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },
  container_text: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
  },
  solo: {
    marginLeft: 25,
  },
  margin: {
    marginBottom: 10,
  },
  container_title_li: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 25,
    marginBottom: 10,
  },
  container_Consignes_de_sécurite_echafaudage: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
  },
  container_title_Consignes_de_sécurite_echafaudage: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },
  all_p: {
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
    lineHeight: 1.5,
  },
  p: {
    marginBottom: 10,
  },

  container_title_lieu: {
    width: "100%",
    display: "flex",

    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  container_title_: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },
  container_title_risque: {
    width: "100%",
    display: "flex",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 12,
  },
  img_urgent: {
    width: "250",
    height: "200",
  },
  tab: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
  },
  title_tab: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 15,
  },
  padding_tab: {
    padding: 5,
  },
});
const MyDocument = ({
  nomChantier,
  rue,
  cp,
  numeroAffaire,
  nomInspecteur,
  adressInspecteur,
  numInspecteur,
  mailInspecteur,
  nomOPPBTP,
  adressOPPBTP,
  numOPPBTP,
  mailOPPBTP,
  adressCRAMIF,
  numCRAMIF,
  mailCRAMIF,
  debuttravaux,
  fintraveau,
  duree,
  nomHopital,
  adresshopital,
  numerohopital,
  adressophtalmo,
  numeroophtalmo,
  adressantipoison,
  numeroantipoison,
  adressgeneraliste,
  numerogeneraliste,
}) => (
  <Document>
    {/* 1 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section_logo}>
        <Image src="/logo.png" style={styles.logo} />
      </View>
      <View style={styles.section_ppsps}>
        <Text>
          <Text style={styles.first_lettre}>P</Text>LAN PARTICULIER
        </Text>
        <Text>
          DE <Text style={styles.first_lettre}>S</Text>ECURITE
        </Text>
        <Text>
          ET DE <Text style={styles.first_lettre}>P</Text>ROTECTION DE LA{" "}
          <Text style={styles.first_lettre}>S</Text>ANTE
        </Text>
      </View>
      <View style={styles.container_chantier}>
        <View style={styles.container_tile_chantier}>
          <Text style={styles.title_chantier}>CHANTIER:</Text>
        </View>
        <View style={styles.container_information_chantier}>
          <Text style={styles.title_chantier}>{nomChantier}</Text>
          <Text style={styles.title_chantier}>{rue}</Text>
          <Text style={styles.title_chantier}>{cp}</Text>
        </View>
      </View>
      <View style={styles.numero_daffaire}>
        <View style={styles.container_tile_daffaire}>
          <Text style={styles.title_chantier}>N° D’AFFAIRE: </Text>
        </View>
        <View style={styles.container_numero}>
          <Text style={styles.numero}> {numeroAffaire}</Text>
        </View>
      </View>
    </Page>
    {/* 2 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_pages_all}>
        <Text style={styles.title_pages}>RENSEIGNEMENTS GENERAUX</Text>
      </View>
      <View style={styles.container_responsable}>
        <View style={styles.container_tile_responsable}>
          <Text style={styles.title_responsable}>
            Responsable chantier & sécurité:{" "}
          </Text>
        </View>
        <View style={styles.container_information_responsable}>
          <Text style={styles.title_responsable}>KARADUMAN Bilen</Text>
          <Text style={styles.adress_responsable}>
            36 RUE DU BOIS DES ROCHES, 91700 STE GENEVIEVE DES BOIS
          </Text>

          <Text style={styles.title_responsable}>
            06.16.03.64.83 – koban.spk@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.container_title_Responsable_covid}>
        <View style={styles.title_Responsable_covid}>
          <Text>Responsable covid-19: </Text>
        </View>
        <View style={styles.nom_Responsable_covid}>
          <Text>KARADUMAN Mehmet</Text>
          <Text>06.64.90.71.77</Text>
        </View>
      </View>
      <View style={styles.container_title_organisations}>
        <Text style={styles.title_organisations}>ORGANISMES</Text>
      </View>
      <View style={styles.container_Inspection_du_travail}>
        <View style={styles.title_Inspection_du_travail}>
          <Text>Inspection du travail: </Text>
        </View>
        <View style={styles.contaner_inforfation_Inspection_du_travail}>
          <Text style={styles.contaner_nom_ou_inspecteur}>{nomInspecteur}</Text>
          <Text style={styles.contaner_adress_inspecteur}>
            {adressInspecteur}
          </Text>
          <Text style={styles.contaner_number_inspecteur}>{numInspecteur}</Text>
          <Text style={styles.contaner_mail_inspecteur}>{mailInspecteur}</Text>
        </View>
      </View>
      <View style={styles.container_O_P_P_B_T_P}>
        <View style={styles.title_O_P_P_B_T_P}>
          <Text>O.P.P.B.T.P.: </Text>
        </View>
        <View style={styles.contaner_inforfation_O_P_P_B_T_P}>
          <Text style={styles.contaner_nom_ou_inspecteur}>{nomOPPBTP}</Text>
          <Text style={styles.contaner_adress_inspecteur}>{adressOPPBTP}</Text>
          <Text style={styles.contaner_number_inspecteur}>{numOPPBTP}</Text>
          <Text style={styles.contaner_mail_inspecteur}>{mailOPPBTP}</Text>
        </View>
      </View>
      <View style={styles.container_CRAMIF}>
        <View style={styles.title_CRAMIF}>
          <Text>CRAMIF: </Text>
        </View>
        <View style={styles.contaner_inforfation_CRAMIF}>
          <Text style={styles.contaner_adress_CRAMIF}>{adressCRAMIF}</Text>
          <Text style={styles.contaner_number_CRAMIF}>{numCRAMIF}</Text>
          <Text style={styles.contaner_mail_CRAMIF}>{mailCRAMIF}</Text>
        </View>
      </View>
      <View style={styles.container_Medecine_du_travail}>
        <View style={styles.Medecine_du_travail}>
          <Text>Médecine du travail: </Text>
        </View>
        <View style={styles.contaner_inforfation_Medecine_du_travail}>
          <Text style={styles.contaner_n_Medecine_du_travail}>APST</Text>
          <Text style={styles.contaner_nom_Medecine_du_travail}>
            Mme HAZAEL-PASCAL Solange
          </Text>
          <Text style={styles.contaner_adress_Medecine_du_travail}>
            72 rue jean Argelies, 91260 Juvisy sur orge
          </Text>
          <Text style={styles.contaner_number_Medecine_du_travail}>
            01.69.21.23.40
          </Text>
          <Text style={styles.contaner_mail_Medecine_du_travail}>
            hazael-pascal@apst.fr
          </Text>
        </View>
      </View>
      <View style={styles.container_modification_evolution}>
        <Text style={styles.modification_evolution}>
          {
            "Les évolutions et modifications sont courants dans la profession, de ce fait les risques et moyens de préventions seront analysés au fur et à mesure, ce qui pourra faire l'objet d'avenants au présent P.P.S.P.S."
          }
        </Text>
      </View>
    </Page>
    {/* 3 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_pages_all}>
        <Text style={styles.title_pages}>
          FICHE SIGNALETIQUE DE L ENTREPRISE
        </Text>
      </View>
      <View style={styles.container_sass}>
        <Text style={styles.sass}>KOBAN SPK SAS au capital de 1000€</Text>
        <Text>36 RUE DU BOIS DES ROCHES, 91700 STE GENEVIEVE DES BOIS</Text>
      </View>
      <View style={styles.container_responsable_entreprise}>
        <View style={styles.container_tile_responsable_entreprise}>
          <Text style={styles.title_responsable_entreprise}>
            Représentant:{" "}
          </Text>
        </View>
        <View style={styles.container_information_responsable_entreprise}>
          <Text style={styles.title_responsable}>KARADUMAN Bilen</Text>

          <Text style={styles.title_responsable_entreprise}>
            06.16.03.64.83 – koban.spk@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.container_responsable_entreprise_info}>
        <Text>N° registre de commerce : 919 095 174 - RCS EVRY</Text>
        <Text>
          Qualification : Application Tuyauterie - Protection incendie
          (Sprinklers)
        </Text>
        <Text>Code APE : 4322A</Text>
        <Text>Assurance : RC et DECENNALE échéance le 31/12/24</Text>
      </View>
      <View style={styles.container_sous_traitant}>
        <View style={styles.container_tile_sous_traitant}>
          <Text style={styles.title_sous_traitant}>Sous traitant de: </Text>{" "}
        </View>
        <View style={styles.container_information_sous_traitant}>
          <Text>UXELLO tertiaire IDF </Text>
          <Text>13 AVENUE LOUIS Blériot, ZAC des Epineaux – CS 80078</Text>
          <Text>95741 FREPILLON</Text>
        </View>
      </View>
      <View style={styles.container_correspondant_securite}>
        <View style={styles.container_tile_correspondant_securite}>
          <Text style={styles.title_correspondant_securite}>
            Correspondant sécurité:{" "}
          </Text>{" "}
        </View>
        <View style={styles.container_information_correspondant_securite}>
          <Text>FAQIR Samir</Text>
          <Text>01.88.90.00.65 / 06.69.68.99.23</Text>
        </View>
      </View>
      <View style={styles.container_nature}>
        <Text> Nature des travaux :</Text>
        <Text> Pose de réseau sprinkler. </Text>
      </View>
      <View style={styles.container_Duree}>
        <View style={styles.container_Duree_ti}>
          <Text style={styles.title_Duree}>Durée du chantier : </Text>{" "}
        </View>
        <View style={styles.container_Duree_info}>
          <Text>
            Début des travaux : <Text>{debuttravaux}</Text>
          </Text>
          <Text>
            Fin des travaux : <Text>{fintraveau}</Text>
          </Text>
          <Text>
            Durée prévisionnelle: <Text>{duree}</Text> mois
          </Text>
        </View>
      </View>
      <View style={styles.container_Horaires}>
        <View style={styles.container_Horaires_tit}>
          <Text style={styles.title_Duree}>Horaires :</Text>{" "}
        </View>
        <View style={styles.container_Horaires_info}>
          <Text>Lundi au vendredi</Text>
          <Text>8 h 00 à 12 h00 – 13 h 30 à 17h00</Text>
        </View>
      </View>
      <View style={styles.container_Effectif}>
        <Text>Effectif prévisionnel :</Text>{" "}
        <Text>
          {
            "2 à 6 personnes suivant l'avancement du chantier et le respect du planning"
          }
        </Text>
      </View>
    </Page>
    {/* 4 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_pages_all}>
        <Text style={styles.title_pages}>CONSIGNES DE SECURITE</Text>
      </View>
      <View style={styles.container_title_Consign}>
        <Text>Consignes générales</Text>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>
          Il est demandé de manière générale à notre personnel de chantier :
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>-</Text>
        </View>
        <View>
          <Text>
            De respecter les consignes de sécurité santé environnement données
            par le responsable de chantier
          </Text>
          <Text>et le client</Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>De maintenir en place les protections collectives</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De ne pas mettre en danger leur propre sécurité ainsi que celle des
          personnes travaillant à proximité
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>-</Text>
        </View>
        <View>
          <Text>
            De baliser les zones dangereuses avec des bandes signalétiques ou
            équivalent ou interdire l’accès par
          </Text>
          <Text>la mise en place de barrières</Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De respecter le port des équipements de protection individuelles
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>De ne pas consommer d’alcool sur le lieu de travail</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De ne pas fumer et manger en dehors des zones prévues à cet effet
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          D’informer le responsable de chantier en cas de prise de médicaments
          pouvant influer sur la vigilance
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De signaler tout risque grave ou imminent et dans ce cas, quitter le
          poste de travail immédiatement
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De signaler tout matériel défectueux ou présentant un risque pour
          l’utiliser
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>-</Text>
        <Text>
          De signaler au responsable de chantier tout risque de danger grave
          provenant d’autres sociétés
        </Text>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>
          Protections individuelles obligatoires à disposition du personnel
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Casque de sécurité</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Gants de manutention</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Harnais de sécurité</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Lunettes de protection</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Chaussures de sécurité</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Bottes de sécurité</Text>
      </View>
      <View style={styles.protection_elec}>
        <View style={styles.container_title}>
          <Text>Protection électrique</Text>
        </View>
        <View style={styles.container_text}>
          <Text>
            Coffrets de sécurité 200 volts, pour outillage puissance 2000 watts
            équipés de disjoncteur différentiel 30 mA
          </Text>
          <Text>
            Armoires électriques munies de prises 32 et 63 à protéger chacune
            par un disjoncteur différentiel 30 mA.
          </Text>
        </View>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>Moyens de prévention autre</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Extincteurs pour poste de soudage et découpage</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Extincteurs pour les installations de chantier</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Clapets anti-retour équipant les postes oxyacéthyléniques</Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            Obligation de faire exécuter les raccordements électriques de nos
            diverses installations par un
          </Text>
          <Text style={styles.solo}>électricien qualifié et agrée.</Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          Mise à la terre des masses métalliques de nos diverses installations
          de chantier
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          Stockage du matériel se fera dans les bâtiments, selon zones
        </Text>
      </View>
      <View style={styles.container_livraison}>
        <View style={styles.container_title_li}>
          <Text>Livraison de la préfabrication</Text>
        </View>
        <View style={styles.container_text}>
          <Text style={styles.margin}>
            Le réseau sera livré par camion et déchargée avec un engin de
            chantier manuscopique de catégorie 9 ou une grue pour faciliter le
            déchargement
          </Text>
          <Text>
            Le réseau sera conditionné par fagot, entre chaque nappe de tuyau
            présence de cale pour faciliter les futures manutentions mais aussi
            pour éloigner les extrémités des tubes du sol et des éventuels corps
            étrangers qui pourraient y pénétrer. Les consommables eux seront sur
            des palettes filmées ou dans des caisses bois / cartons sur palette.
          </Text>
        </View>
      </View>
      <View style={styles.container_Consignes_de_sécurite_echafaudage}>
        <View style={styles.container_title_Consignes_de_sécurite_echafaudage}>
          <Text>Consignes de sécurité échafaudage roulant</Text>
        </View>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "N'utiliser que les échafaudages nous appartenant et conformes aux règles de sécurité que nous vous avons communiquées à différentes reprises et que nous vous rappelons ci-dessous."
            }
          </Text>
          <Text>
            {
              "Il est absolument interdit d'utiliser des échafaudages qui ne répondraient pas aux règles de sécurité."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "En cours de montage, il convient d'utiliser un équipement individuel contre les chutes qui sera fixe aux éléments les plus hauts avec une longe courte."
            }
          </Text>
          <Text style={styles.p}>
            {
              "Les échafaudages utilisés sont de marque DUARIB voir l'éclate page suivante pour son montage. "
            }
          </Text>
        </View>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>Moyens de prévention autre</Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              " De garde-corps constitués par les éléments d'échafaudage avec lisses placées à 1,00 M et sous lisses à 0,45 "
            }
          </Text>
          <Text style={styles.solo}>M AL dessus du plancher.</Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>{"De plinthes d'une hauteur de 15 centimètres au moins."}</Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "Le matériel nécessaire est livré avec l'échafaudage. Il est interdit d'encombrer ou de surcharger les planchers."
            }
          </Text>
          <Text>
            {
              "Approvisionner les matériaux au fur et à mesure de leur utilisation : en répartir uniformément les charges sur les planchers. Aménager des moyens d'accès au plancher de travail présentant toutes garantis de résistance et de stabilité."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "Ces moyens d'accès comporteront des protections empêchant de chuter ou pouvant recueillir un ouvrier ayant perdu  l'équilibre."
            }
          </Text>
          <Text style={styles.p}>
            {
              "Lors des travaux en sous plafond et au cas ou des obstacles fixes dus à la disposition des lieux s'opposeraient à la mise en place des garde-corps dans les conditions prévues pendant l'exécution des travaux, des dispositions spéciales devront être prises pour assurer la protection des ouvriers appeler à utiliser l'échafaudage de façon à ce qu'ils ne soient pas exposés à des risques de chutes."
            }
          </Text>
          <Text style={styles.p}>
            {
              "Les ouvriers travaillant sur des planchers dont les garde-corps ont été modifiés en raison de la disposition des lieux devront être équipés de ceinture de sécurité et amarrés au poste de travail, afin d'éviter tout risque de chute."
            }
          </Text>

          <Text style={styles.p}>
            {
              "Lorsque les échafaudages roulants sont utilisés sur des sols hétérogènes, meubles ou en déclivités, ils devront prendre appui sur des platelages assurant leur stabilité et facilitant leur déplacement sans risque de basculement."
            }
          </Text>

          <Text style={styles.p}>
            {
              "Pendant l'utilisation de l'échafaudage, les vernis des roues doivent être bloqués de façon à éviter tout déplacement accidentel. Ils ne doivent être libérés que pour permettre le déplacement de l'échafaudage.Pendant les manœuvres du déplacement, aucun ouvrier ne doit se trouver sur l'échafaudage. Ces manœuvres doivent être faites sous le contrôle du responsable de chantier ou d'un ouvrier qualifié désigné par lui."
            }
          </Text>

          <Text style={styles.p}>
            {
              "Il faut veiller à ce que rien ne gène la manœuvre au sol et en hauteur. Fixer solidement les échafaudages roulants au gros œuvre ou à tout autre point d'amarrage offrant une résistance suffisante, de telle sorte qu'ils ne puissent ni basculer, ni se déplacer pendant leur utilisation."
            }
          </Text>

          <Text style={styles.p}>
            {
              "Les conducteurs de chantier et les responsables de chantier sont chargés de veiller à l'application très strictede ces mesures de sécurité."
            }
          </Text>
        </View>
      </View>
      <View style={styles.container_title_li}>
        <Text>Consignes de sécurité éléctrique</Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "L'utilisation du courant pour l'outillage électrique concernant les travaux de montage, maintenance, entretien et dépannage.  "
            }
          </Text>
          <Text>
            {
              "L'outillage électroportatif doit être de classe II, il sigle et ne fonctionne que sur des tensions inférieures à 500 volts en courant alternatif."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "Les câbles prolongateurs doivent répondre à la norme H07 RNF et être munis d'un conducteur de protection (filvert, jaune), servant uniquement à favoriser la mise hors tension en cas de détérioration du câble. Ils doivent être installés de façon à ne pas être endommagés par la chute de matériaux ou le passage d'engins."
            }
          </Text>
          <Text style={styles.p}>
            {
              "Des protections électriques doivent être mises en place en fonction du lieu d'utilisation :    "
            }
          </Text>
        </View>
      </View>
      <View style={styles.container_title_lieu}>
        <Text>1. LIEUX SECS ET NON-CONDUCTEURS</Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "Les branchements ne se feront que sur des prises ou des installations équipées de dispositifs de protection à courant différentiel résiduel (DR) à haute sensibilité : seuil de fonctionnement inférieur à 30 MA (DR 0,003 A). Ils seront réalisés sur les tableaux ou armoires de chantier, sur des armoires électriques de l'entreprise, sur des socles de prise de courant dans les bâtiments existant."
            }
          </Text>
          <Text>
            {
              "Avant tout branchement il convient de s'assurer que la tension soit approprié à l'outillage et que la protection haute sensibilité existe. Dans la négative ou dans le doute sur cette protection, mettre en place un disjoncteur DR individuel,pour prise de courant, muni d'un bouton 'test'. Le bouton 'test' doit être manœuvré périodiquement ( 1 fois par jour)."
            }{" "}
          </Text>
        </View>
      </View>
      <View style={styles.container_title_lieu}>
        <Text>2. LIEUX HUMIDES ET ENCEINTES CONDUCTRICES EXIGUES</Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "Dans ces lieux de travail les appareils portatifs à main, à l'exception des lampes baladeuses et projecteurs mobiles, devront être alimentés :"
            }
          </Text>
          <Text style={styles.p}>
            {
              "- Soit avec du courant de très basse tension de sécurité (T.B.S.T.S)"
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "- Soit à l'aide d'un transformateur de séparation isolé par une double isolation. Chaque transformateur n'alimentant qu'un seul appareil. Le transformateur devant être placé dans un endroit sec à l'extérieur de l'enceinte conductrice."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "Les lampes baladeuses et les projecteurs mobiles étant alimentés en T.B.S.T.S., l'alimentation se fera hors des lieux humides et des enceintes conductrices exiguës."
            }{" "}
          </Text>
        </View>
      </View>
      <View style={styles.container_title_li}>
        <Text>NOTA :</Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "Les enceintes conductrices sont les locaux composés de nombreuses parties métalliques. Les enceintes exiguës sont les emplacements dont l'exiguïté limite les possibilités de se déplacer."
            }
          </Text>
          <Text style={styles.p}>
            {
              "Les enceintes conductrices exiguës sont les volumes dont les parois sont essentiellement constitués de parties               métalliques ou conductrices, à l'intérieur desquels une personne est en contact avec les parois environnante"
            }{" "}
          </Text>
        </View>
      </View>
      <View style={styles.container_title_}>
        <Text>
          Consignes liées aux travaux en hauteur (échelles, plate-forme et
          nacelles élévatrices motorisées)
        </Text>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>Chaque appareil doit être livré avec :</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Des instructions nécessaires à l'utilisation du matériel et à son entretien courant"
          }
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>{"Le certificat d'épreuves et de conformité"}</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <View style={styles.container_ligne_consigne}>
          <View>
            <Text>
              {
                "(la périodicité de ces vérifications ne devant pas excéder 6 mois d'intervalles)."
              }
            </Text>
            <Text>
              {
                "Toute anomalie de fonctionnement doit donner lieu à la mise hors service jusqu'à"
              }
            </Text>
            <Text>
              {
                "la remise en état par un spécialiste (à mentionner sur le carnet spécial)."
              }
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container_title_risque}>
        <Text>Risques</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {"Chute dans le vide, basculement, renversement de l'appareil"}
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Éjection de l'utilisateur due à des accélérations ou décélérations brutales"
          }
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Retombée accidentelle de la nacelle ou du plateau de travail par suite d'une surcharge,  "
            }
          </Text>
          <Text>
            {
              "d'un effet anormal du à un accrochage d'un élément fixe pendant la montée,"
            }
          </Text>
          <Text>{" de défaillance d'un organe mécanique de l'appareil"}</Text>
        </View>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            Basculement, balancement, déplacement giratoire de la nacelle sous
          </Text>
          <Text>
            {
              "l'effet du vent ou d'une poussée due à un effort pour la mise en place du matériel"
            }
          </Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>{"mmobilisation accidentelle du plateau en position haute"}</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Écrasement, accrochage de l'utilisation sur une partie fixe de la construction"
          }
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Atteinte d'une personne au sol pendant des manœuvres de déplacement"
          }
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Écrasement, cisaillement dans le mécanisme des plates-formes élévatrices"
          }
        </Text>
      </View>
      <View style={styles.container_title_risque}>
        <Text>Prévention</Text>
      </View>

      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Maintien en position des garde-corps, et portillon d'accès qui doit être fermé pendant l'utilisation"
            }
          </Text>
          <Text>{"de l'appareil"}</Text>
        </View>
      </View>

      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Ne déplacer l'appareil que sur des sols plans et stabilisés, remblayer si nécessaire "
            }
          </Text>
          <Text>{"les déclivités pouvant compromettre la stabilité"}</Text>
        </View>
      </View>

      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Contrôler l'absence de trous de réservation dans le plancher tout au long du cheminement prévu"
          }
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "L'utilisation doit s'assurer avant la mise en service effective, sur un sol plat et stable (sol "
            }
          </Text>
          <Text>
            {
              "bétonné par exemple), que l'appareil n'a pas de démarrage ou d'accélération"
            }
          </Text>
          <Text>
            {
              "brusque, que la vitesse de déplacement est inférieure à la marche normale d'une personne,"
            }
          </Text>
          <Text>
            {
              "que l'immobilisation soit faite à coup et qu'il se trouve réellement immobilisé en "
            }
          </Text>
          <Text>
            {
              "position d'arrêt (faire un essai manuel de déplacement en essayant de le pousser)"
            }
          </Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Les plates-formes et nacelles élévatrices ne doivent pouvoir se déplacer qu'en un seul élément"
          }
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {
            "Ne pas dépasser la capacité de levage de l'appareil ; celle-ci doit être inscrite clairement sur l'appareil"
          }
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Les plates-formes et nacelles élévatrices doivent être équipées d'un limiteur de charge, une"
            }
          </Text>
          <Text>
            {"pré alarme doit avertir avant le fonctionnement du limiteur"}
          </Text>
        </View>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Chaque mécanisme d'élévation, par chaîne, câble ou vérins hydraulique, doit être muni "
            }
          </Text>
          <Text>
            {"d'un dispositif s'opposant à la retombée de la nacelle"}
          </Text>
        </View>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Ne pas utiliser ces appareils comme vérin de manutention ni les soumettre à des contraintes"
            }
          </Text>
          <Text>{"pour la mise en place du matériel"}</Text>
        </View>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "Une commande depuis le nacelle ou le plateau de travail doit pouvoir ramener l'appareil en"
            }
          </Text>
          <Text>{"position basse"}</Text>
        </View>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          {"L'utilisateur ne doit jamais rester seul sur le chantier"}
        </Text>
      </View>
      <View style={styles.container_ligne_consigne}>
        <View>
          <Text style={styles.tir}>{">"}</Text>
        </View>
        <View>
          <Text>
            {
              "S'assurer de la disponibilité sur le chantier d'un échafaudage, pendant la"
            }
          </Text>
          <Text>{"manœuvre de transbordement"}</Text>
        </View>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "La commande de l'appareil ne doit pas être possible que depuis la nacelle ou le plateau de travail, elle doit pouvoir s'arrêter dès que cesse l'intervention de l'utilisateur."
            }
          </Text>
          <Text style={styles.p}>
            {
              "La commande de secours depuis le bas, doit donner lieu à une manœuvre particulière."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "- Il appartient à l'utilisateur de s'assurer que la manœuvre peut être effectuée sans danger pour qui que ce soit."
            }{" "}
          </Text>
          <Text style={styles.p}>
            {
              "Des protecteurs périphériques doivent empêcher de pénétrer dans les parties mécaniques de l'appareil. Le               dépannage doit être exécuté par un spécialiste mettant en place des mesures de protection"
            }{" "}
          </Text>
        </View>
      </View>
    </Page>

    {/* 5 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_pages_all}>
        <Text style={styles.title_pages}>
          FICHE SIGNALETIQUE DE L ENTREPRISE
        </Text>
      </View>
      <View style={styles.container_text}>
        <View style={styles.all_p}>
          <Text style={styles.p}>
            {
              "De manière générale les soins seront dispenses par un secouriste présent sur le chantier, à l’aide de la trousse de secours disponible dans le camion"
            }
          </Text>
        </View>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>En cas d’accident grave:</Text>
      </View>

      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Eviter de déplacer le bléssé</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Se conformer aux instructions affichées sur le chantier</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Chercher un secouriste</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          Signaler le nombre de blesses, la gravité et l’adresse exacte du
          chantier
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Preparer les équipements nécessaires au secours</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Assister le blesse en attendant l’arrivée des secours</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>S’assurer que le blesse soit placé en lieu sûr</Text>
      </View>
      <View style={styles.container_title_organisations}>
        <Text style={styles.title_organisations}>ORGANISMES</Text>
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>
          Tout accident de travail ou de trajet devra être signalé immédiatement
          au chef de chantier{" "}
        </Text>
      </View>
      <View style={styles.section_img}>
        <Image src="/urgent.png" style={styles.img_urgent} />
      </View>
      <View style={styles.container_premiere_ligne}>
        <Text>
          Lors de votre appel il faudra donner les renseignements suivants :
        </Text>
      </View>

      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{"•"}</Text>
        <Text>Votre adresse,</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>La nature de l’accident (chute, asphyxie, éboulement…),</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>Le nombre de blessés,</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>L’intervention réalisée par le secouriste,</Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          Un point de rendez-vous où retrouver les secours pour les guider
          jusqu’à la victime.
        </Text>
      </View>
      <View style={styles.ligne_sans_retour}>
        {" "}
        <Text style={styles.tir}>{">"}</Text>
        <Text>
          Faites répéter les informations et ne raccrochez pas en premier.
        </Text>
      </View>
    </Page>
    {/* 6 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.container_title_organisations}>
        <Text style={styles.title_organisations}>ORGANISMES</Text>
      </View>

      <Table style={styles.tab}>
        <TH>
          <TD style={styles.padding_tab}>Désignation</TD>
          <TD style={styles.padding_tab}>Adresse</TD>
          <TD style={styles.padding_tab}>Téléphone</TD>
        </TH>
        <TR>
          <TD style={styles.padding_tab}>Hopital {nomHopital}</TD>
          <TD style={styles.padding_tab}>{adresshopital}</TD>
          <TD style={styles.padding_tab}>{numerohopital}</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Centre ophtalmologique </TD>
          <TD style={styles.padding_tab}>{adressophtalmo}</TD>
          <TD style={styles.padding_tab}>{numeroophtalmo}</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Centre antipoison de Paris</TD>
          <TD style={styles.padding_tab}>{adressantipoison}</TD>
          <TD style={styles.padding_tab}>{numeroantipoison}</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Medecin generaliste</TD>
          <TD style={styles.padding_tab}>{adressgeneraliste}</TD>
          <TD style={styles.padding_tab}>{numerogeneraliste}</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>ERDF/GRDF </TD>
          <TD style={styles.padding_tab}>Centre d’appel dépannage</TD>
          <TD style={styles.padding_tab}>0800 47 33 33</TD>
        </TR>
      </Table>
      <View style={styles.container_responsable_entreprise_info}>
        <Text>Documents à disposition dans le camion ou au bureau</Text>
        <Text>PPSPS</Text>
        <Text>Numéros d’urgence</Text>
        <Text>Habilitation/ aptitudes médicales</Text>
        <Text>Consignes générales / consignes covid</Text>
      </View>
    </Page>
    {/* 7 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_pages_all}>
        <Text style={styles.title_pages}>MODE OPERATOIRE</Text>
      </View>
      <View style={styles.title_tab}>
        <Text>RISQUES PROPRES A L’ACTIVITE</Text>
      </View>
      <Table style={styles.tab}>
        <TH>
          <TD style={styles.padding_tab}>
            {"PHASE D'EXECUTION MOYENS EMPLOYES"}
          </TD>
          <TD style={styles.padding_tab}>ARISQUES PREVISIBLES </TD>
          <TD style={styles.padding_tab}>MESURES RETENUES</TD>
        </TH>
        <TR>
          <TD style={styles.padding_tab}>
            Déchargement et manutention du matériel
          </TD>
          <TD style={styles.padding_tab}>
            Chute des charges écrasement, coincement, coupure
          </TD>
          <TD style={styles.padding_tab}>
            Aménagement des zones de circulation, calage et arrimage des charges
            sur diable et chariot de manutention
          </TD>
        </TR>

        <TR>
          <TD style={styles.padding_tab}>
            Mise à hauteur du personnel pour installation du matériel et des
            tuyauteries en élévation{" "}
          </TD>
          <TD style={styles.padding_tab}>Chute de hauteur du personnel</TD>
          <TD style={styles.padding_tab}>
            Roulage des échafaudages sans utilisateur dessus sur sol plan et
            dégagé
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Emploi du courant électrique </TD>
          <TD style={styles.padding_tab}>Électrisation</TD>
          <TD style={styles.padding_tab}>
            {
              " Utilisation d'outillage électroportatif de classe II uniquement et de prolongateurs électriques répondant à la norme H07 RNF. Lesbranchements doivent être réalisés"
            }{" "}
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Armoire électrique de chantier</TD>
          <TD style={styles.padding_tab}>Electrocution</TD>
          <TD style={styles.padding_tab}>
            {
              "Les courants électriques sont dangereux, surtout en milieu humide et très conducteurs (réservoir, charpentes métalliques) et les installations doivent être conçues pour assurer toute garantie d'isolement et de sécurité."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              " Les branchements des appareils ne doivent être faits qu'à partirde tableaux électriques de chantier spécialement installés à ceteffet et qui sont munis des dispositifs de sécurité "
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            Leécessaires s câbles e.t fiches de prise de courant des appareils
            portatifs doivent être en parfait état. Ces fiches doivent
            correspondre aux prises femelles des tableaux de distribution.
          </TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              " Il ne faut pas laisser traîner à terre des fils et des câbles,afin d'éviter leur détérioration par le personnel et le  frottement."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              " Si des outillages électriques alimentés en 110 et 220V. ne sont pas à double isolement(le double isolement est précisé par le signe sur la plaque signalétique de l'appareil), ils doivent obligatoirement être mis à la terre."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              "Toute détérioration ou défaut d'isolement des installations électriques doit être immédiatement signalés"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Utilisation du chalumeau soudeurs et découpeurs oxyacéthylénique
          </TD>
          <TD style={styles.padding_tab}>
            {
              "Éclatement des tuyaux souples d'alimentation des chalumeaux par retour de flamme. Renversement des bouteilles"
            }
          </TD>
          <TD style={styles.padding_tab}>
            Les postes sont équipés de clapets de non retour situés à 2M des
            chalumeaux. Elles seront utilisées debout solidement attachées ou
            couchées sur des chariots à bouteilles
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Manutention manuelle</TD>
          <TD style={styles.padding_tab}>
            Risque de TMS Trouble Musculo Squelettique
          </TD>
          <TD style={styles.padding_tab}>
            Port des EPI obligatoire gants, chaussures, casque si charge
            suspendue - Respect des bonnes pratiques de Gestes et Postures -
            Utilisation d’aide mécanisée (chariot, palan, etc.) ou manutention à
            plusieurs personnes
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Ambiance physique</TD>
          <TD style={styles.padding_tab}>Bruit, éclairage, chaleur, froid </TD>
          <TD style={styles.padding_tab}>
            port des EPI appropriés (bouchons antibruit, tenue chaude ou légère)
            - préparation du chantier - balisage des zones de travail - ajout de
            lumières d’appoint Port de vêtement de travail Pose de 15 minutes
            toutes les 2 heures si conditions de chaleur ou de froid excessifs
          </TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}>
            Poussières, particules en suspension
          </TD>
          <TD style={styles.padding_tab}>Atteinte des voies respiratoires </TD>
          <TD style={styles.padding_tab}>EPI masque à poussière</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Soudage arc </TD>
          <TD style={styles.padding_tab}>Électrisation</TD>
          <TD style={styles.padding_tab}>
            {
              "Les postes utilisant le courant du secteur seront raccordés sur des armoires munies de dispositif de protection différentiel. Le contrôle de la continuité des terres sera demandé à l'électricien de chantier."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            Émission du rayon U.V et Infrarouge
          </TD>
          <TD style={styles.padding_tab}>
            {
              "Chaque soudeur sera équipé de masque avec filtre oculaire adapté de gants et d'un tablier de cuir, des écrans de protection du voisinage seront mis en place si nécessaire."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Utilisation de meuleuse tronçonneuse, de perforateur à percussion
          </TD>
          <TD style={styles.padding_tab}>Coupure</TD>
          <TD style={styles.padding_tab}>
            Maintien en place des carters de protection, utiliser des gants de
            protection
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            Projection de particules de meulage ou de poussière et graviers de
            ciment
          </TD>
          <TD style={styles.padding_tab}>Port de lunettes de sécurités</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Utilisation gazelle</TD>
          <TD style={styles.padding_tab}>
            Chute de hauteur par glissement du pied
          </TD>
          <TD style={styles.padding_tab}>
            Gazelle munies des bars stabilisatrice
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            Elles auront une longueur suffisante pour offrir un appui sur aux
            mains et aux pieds et conserver une inclinaison correcte (écart de ¼
            de la longueur)
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Travaux en hauteur ne pouvant être exécutés avec des protections
            collectives
          </TD>
          <TD style={styles.padding_tab}>Chute de hauteur</TD>
          <TD style={styles.padding_tab}>
            {
              "Dans ce cas les monteurs devront s'équiper de harnais de sécurité fournis par l'entreprise"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              "Les points d'amarrage des longes seront déterminés par le responsable"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Peinture antirouille Application à la brosse et/ou au gant à peindre
          </TD>
          <TD style={styles.padding_tab}>
            Inhalation de vapeur nocive Incendie Intoxication
          </TD>
          <TD style={styles.padding_tab}>
            {
              "Utilisdation EPI et Outillage adapté Effectuer la mise en peinture à l'extérieur ou en local ventilé Interdiction de peindre à proximité de travaux par point chaud"
            }
          </TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}>Incendie</TD>
          <TD style={styles.padding_tab}></TD>
          <TD style={styles.padding_tab}>
            {
              "Interdiction, de fumer Ne pas effectuer les mélanges peintures et diluant à proximité d'une flamme ou de projections incandescentes (meuleuse)"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Baladeuse</TD>
          <TD style={styles.padding_tab}>Électrocution </TD>
          <TD style={styles.padding_tab}>
            Les baladeuses doivent être alimentées en 24V. à partir des tableaux
            de chantier ou transformateurs indépendants prévus à cet effet.
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Projecteur Alimentation mono 220V</TD>
          <TD style={styles.padding_tab}>Électrocution </TD>
          <TD style={styles.padding_tab}>
            {
              " Raccorder à la prise de terre. Veiller au bon état des câbles d'alimentation et prises électriques. Veiller à la conformité  du matériel."
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Essais sous air (3 à 4 bars) Compresseyr d’air, Boyaux
            d’alimentation
          </TD>
          <TD style={styles.padding_tab}>
            Rupture d’élément d’assemblage Fuite{" "}
          </TD>
          <TD style={styles.padding_tab}>
            Se tenir en amont du sens fluide Port EPI (casque lunettes)
            Intervention sur plateforme stable sinon emploi harnais de sécurité
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Remplissage reseau avec additive : glycol, produit émulseur
          </TD>
          <TD style={styles.padding_tab}>Brulure chimique Irritation</TD>
          <TD style={styles.padding_tab}>
            Port EPI : gants risques chimiques, lunettes Dosettes rince-oeil
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Essais sous eau (15 bar minimum): pompe à épreuve
          </TD>
          <TD style={styles.padding_tab}>
            Rupture d’élément d’assemblage Fuite Electrisation- electrocution
          </TD>
          <TD style={styles.padding_tab}>
            Se tenir en amont du sens fluide Port EPI : casque, lunettes
            Intervention sur plateforme stable sinon emploi harnais de sécurité
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Vissage: Clef à griffes, visseuse choc
          </TD>
          <TD style={styles.padding_tab}>
            Choc-heurt-écrasement Troubles musculosquelétiques (TMS)
          </TD>
          <TD style={styles.padding_tab}>
            Clef de serrage adaptée et en état Respect gestes et postures
            Permutation d’intervenant si emploi prolongé
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Intervention en faux plafonds</TD>
          <TD style={styles.padding_tab}>
            Chutes de la plaque, Chocs, heurts à la tête Poussières et matériaux
            volatiles
          </TD>
          <TD style={styles.padding_tab}>
            Vérification du système d’attache des plaques - Port d’une
            protection de la tête, avec priorité au casque -port d’une
            protection des yeux, lunettes de sécurité ou visière intégrée au
            casque
          </TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}>Incendie </TD>
          <TD style={styles.padding_tab}>
            {
              "Soudure, découpe, meulage - Présence de gaz de combustion -Présence de produits inflammables - Proximité d'installations inflammables - Présence d'huile"
            }
          </TD>
          <TD style={styles.padding_tab}>
            {
              " - interdiction de fumer en dehors des zones prévues à cet effet -présence d'extincteurs adaptés au risque local - connaissance des consignes d'urgence locales - écran, bâche ignifugée -matériel de protection adapté : ventilation, aspiration, masque… -éloignement, écran, conditions particulières - évacuation -surveillance après travaux"
            }
          </TD>
        </TR>
      </Table>
    </Page>
    {/* 8 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_tab}>
        <Text>RISQUES EXPORTES</Text>
      </View>
      <Table style={styles.tab}>
        <TH>
          <TD style={styles.padding_tab}>Phase / déroulement</TD>
          <TD style={styles.padding_tab}>Moyen mis en oeuvre</TD>
          <TD style={styles.padding_tab}>Risques prévisibles </TD>
          <TD style={styles.padding_tab}>Mesures retenues</TD>
        </TH>
        <TR>
          <TD style={styles.padding_tab}>
            Travaux en hauteur Travaux en trémies Travaux en faux plancher
          </TD>
          <TD style={styles.padding_tab}>Trémies Échafaudage Faux plancher</TD>
          <TD style={styles.padding_tab}>Chute d’objets Chute de personnes</TD>
          <TD style={styles.padding_tab}>
            {
              " Balisage de la zone concernée Respect des règles de sécurité concernant les protections collectives (repose de l’EPC au départ  du poste de travail) Présence des plinthes sur les échafaudages"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Utilisation de machines électroportatives
          </TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>
            {"Projections d'étincelles, métaux, copeaux, etc. Incendie"}
          </TD>
          <TD style={styles.padding_tab}>
            {
              " Balisage de la zone concernée Présence obligatoire d'un extincteur à proximité"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            {"Utilisation d'appareils de levage et accessoires"}
          </TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>
            {"Basculement de l'appareil Chute de la charge"}
          </TD>
          <TD style={styles.padding_tab}>
            {
              "Respect des règles de sécurité et des limites des charges et d’accrochage Balisage de la zone d'évolution du matériel Arrimage des charges"
            }
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Mise sous tension </TD>
          <TD style={styles.padding_tab}>Procédure de mise sous tension</TD>
          <TD style={styles.padding_tab}>Électrisation Électrocution</TD>
          <TD style={styles.padding_tab}>
            Identification des ouvrages sous tensions Suivi des procédures de
            mises sous tension / consignation / déconsignation
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Circulations sur le chantier</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>
            Chute de plainpied Chute de hauteur Heurts / Coups
          </TD>
          <TD style={styles.padding_tab}>
            Port des chaussures de sécurité et du casque Sensibilisation au
            respect des consignes et des règles Nettoyage régulier des zones de
            travail
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Levage et Manutention à la grue</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>Chute de matériaux Écrasement</TD>
          <TD style={styles.padding_tab}>
            Port des EPI : casque + gilet HV Ne pas travailler en dessous de la
            zone d’évolution de la charge
          </TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>
            Livraison dans l’aire prévue à cet effet
          </TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>Chute de matériaux Écrasement</TD>
          <TD style={styles.padding_tab}>Port des EPI : casque + gilet HV</TD>
        </TR>
        <TR>
          <TD style={styles.padding_tab}>Travaux bruyants</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>Port des EPI</TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}>Forte production de poussière</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>-</TD>
          <TD style={styles.padding_tab}>Port des EPI</TD>
        </TR>
      </Table>
    </Page>
    {/* 9 page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.title_tab}>
        <Text>RISQUES COVID LIEES A LA COACTIVITE</Text>
      </View>
      <Table style={styles.tab}>
        <TH>
          <TD style={styles.padding_tab}>Domaines du risque</TD>
          <TD style={styles.padding_tab}>Risques prévisibles</TD>
          <TD style={styles.padding_tab}>Moyens mis en oeuvre</TD>
          <TD style={styles.padding_tab}>Mesures retenues</TD>
        </TH>
        <TR>
          <TD style={styles.padding_tab}>
            Risque de transmission par la proximité entre les intervenants
          </TD>
          <TD style={styles.padding_tab}>Contamination COVID-19</TD>
          <TD style={styles.padding_tab}>
            Respecter les gestes barrières et les préconisations des autorités
            gouvernementales et sanitaires compétentes.(Cf. Annexe 1) • Se laver
            les mains fréquemment à l’eau et au savon (ou à défaut avec du gel
            hydroalcoolique) en respectant les consignes de lavage des mains de
            l’OMS. (Cf. Annexe 2) • Distanciation physique : respecter une
            distance minimum de 2 mètre entre chaque intervenant dans tous les
            locaux. • Si un intervenant a des suspicions de symptômes liés à la
            COVID-19, il le signale immédiatement à sa hiérarchie et au Client.
            • Fourniture d’EPI aux intervenant JCI : masques de protection et
            gel hydroalcoolique si un point d’eau n’est pas mis à disposition
            par le Client. • Respecter les préconisations de l’OPPBTP (CF.
            annexe 4) • Faire usage du droit de retrait en cas de non-respect
            des mesures de prévention
          </TD>
          <TD style={styles.padding_tab}>
            Respect des règles de distanciation Port du masque ( si nécessaire)
          </TD>
        </TR>
      </Table>
    </Page>
    <Page size="A4" style={styles.page}>
      <Table style={styles.tab}>
        <TR>
          <TD style={styles.padding_tab}>
            Risque de transmission par les outils, le matériel, les locaux
          </TD>
          <TD style={styles.padding_tab}>Contamination COVID-19</TD>
          <TD style={styles.padding_tab}>
            Interdiction de prêt d’EPI ou d’outils entre membres de l’EE et de
            l’EU • Les masques usagés sont traités selon les recommandations du
            ministère et de la transition écologique et solidaire (Cf. annexe 3)
            Les lieux de vies et sanitaires doivent être nettoyés régulièrement.
            Le client doit fournir du gel hydroalcoolique si un point d’eau
            n’est pas mis à disposition aux intervenants
          </TD>
          <TD style={styles.padding_tab}>
            Nettoyage et désinfection des outils en cas de prêt
          </TD>
        </TR>
      </Table>
    </Page>

    {/* 10 page */}

    {/* 11 page */}

    {/* 12 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 13 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 14 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 15 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 16 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 17 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 18 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 19 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 20 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 21 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 22 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 23 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 24 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 25 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 26 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 27 page */}
    <Page size="A4" style={styles.page}></Page>
    {/* 28 page */}
    <Page size="A4" style={styles.page}></Page>
  </Document>
);

export default MyDocument; // Exportation par défaut de MyDocument
