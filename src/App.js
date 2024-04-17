import React from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import MyDocument from "./components/pdf/pdf";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PDFDownloadLink } from "@react-pdf/renderer";
// Create styless
import styles from "./styles/home/app.module.scss";
function App() {
  const { register, handleSubmit } = useForm();
  const [submittedData, setSubmittedData] = useState(" ");
  const [showButton, setShowButton] = useState(false);
  const onSubmit = (data) => {
    setSubmittedData(data);
    setShowButton(true);
  };
  const handleFormChange = () => {
    setShowButton(false); // Cacher le bouton à chaque changement dans le formulaire
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <p className={styles.title}>Créer un PPSPS</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
        <div className={styles.container_informationchantier}>
          <h1 className={styles.titre_blo}>Information du chantier</h1>
          <div className={styles.container_Input_name_rue}>
            <Stack spacing={1}>
              <Input
                {...register("nomChantier")}
                placeholder="Nom"
                className={styles.Input}
              />
              <Input
                {...register("rue")}
                placeholder="Rue"
                className={styles.Input}
              />
            </Stack>
          </div>
          <div className={styles.container_Input_cp}>
            <Input
              {...register("cp")}
              placeholder="Cp"
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>

        <div className={styles.container_Input_nbaffaire}>
          <h1 className={styles.titre_blo}>N°affaire</h1>
          <Input
            {...register("numeroAffaire")}
            placeholder="N°"
            className={styles.Input}
          />
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_Input_nbaffaire}>
          <h1 className={styles.titre_blo}>ORGANISMES</h1>
          <h2 className={styles.h2}>Inspection du travail:</h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("nomInspecteur")}
              placeholder="Nom"
              className={styles.Input}
            />
            <Input
              {...register("adressInspecteur")}
              placeholder="Adresse"
              className={styles.Input}
            />
          </div>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("numInspecteur")}
              placeholder="Numéro"
              className={styles.Input}
            />
            <Input
              {...register("mailInspecteur")}
              placeholder="Mail "
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_informationchantier}>
          <h2 className={styles.h2}>OPPBTP</h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("nomOPPBTP")}
              placeholder="Nom"
              className={styles.Input}
            />
            <Input
              {...register("adressOPPBTP")}
              placeholder="Adresse"
              className={styles.Input}
            />
          </div>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("numOPPBTP")}
              placeholder="Numéro"
              className={styles.Input}
            />
            <Input
              {...register("mailOPPBTP")}
              placeholder="Mail"
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_informationchantier}>
          <h2 className={styles.h2}>CRAMIF</h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("adressCRAMIF")}
              placeholder="Adresse"
              className={styles.Input}
            />
            <Input
              {...register("numCRAMIF")}
              placeholder="Numéro"
              className={styles.Input}
            />
          </div>
          <div className={styles.container_Input_nbaffaire}>
            <Input
              {...register("mailCRAMIF")}
              placeholder="Mail"
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_informationchantier}>
          <h1 className={styles.titre_blo}>Durée du chantier :</h1>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("debuttravaux")}
              placeholder="Debut "
              className={styles.Input}
            />
            <Input
              {...register("fintraveau")}
              placeholder="Fin"
              className={styles.Input}
            />
          </div>
          <div className={styles.container_Input_nbaffaire}>
            <Input
              {...register("duree")}
              placeholder="Duree"
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_informationchantier}>
          <h1 className={styles.titre_blo}>
            Organismes de santé proches du lieu de chantier:
          </h1>
          <h2 className={styles.h2}>Hopital</h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("nomHopital")}
              placeholder="Nom"
              className={styles.Input}
            />
            <Input
              {...register("adresshopital")}
              placeholder="Adresse"
              className={styles.Input}
            />
          </div>
          <div className={styles.container_Input_nbaffaire}>
            <Input
              {...register("numerohopital")}
              placeholder="Numéro"
              className={styles.Input}
            />
          </div>
          <h2 className={styles.h2}>Centre ophtalmologique </h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("adressophtalmo")}
              placeholder="Adresse"
              className={styles.Input}
            />
            <Input
              {...register("numeroophtalmo")}
              placeholder="Numéro"
              className={styles.Input}
            />
          </div>
          <h2 className={styles.h2}>Centre antipoison </h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("adressantipoison")}
              placeholder="Adresse"
              className={styles.Input}
            />
            <Input
              {...register("numeroantipoison")}
              placeholder="Numéro"
              className={styles.Input}
            />
          </div>
          <h2 className={styles.h2}>Médecin Généraliste</h2>
          <div className={styles.container_Input_name_rue}>
            <Input
              {...register("adressgeneraliste")}
              placeholder="Adresse"
              className={styles.Input}
            />
            <Input
              {...register("numerogeneraliste")}
              placeholder="Numéro"
              className={styles.Input}
            />
          </div>
          <hr className={styles.hr} />
        </div>
        <div className={styles.container_button}>
          <input type="submit" className={styles.button} />
          {showButton && (
            <PDFDownloadLink
              document={
                <MyDocument
                  nomChantier={submittedData.nomChantier}
                  rue={submittedData.rue}
                  cp={submittedData.cp}
                  numeroAffaire={submittedData.numeroAffaire}
                  nomInspecteur={submittedData.nomInspecteur}
                  adressInspecteur={submittedData.adressInspecteur}
                  numInspecteur={submittedData.numInspecteur}
                  mailInspecteur={submittedData.mailInspecteur}
                  nomOPPBTP={submittedData.nomOPPBTP}
                  adressOPPBTP={submittedData.adressOPPBTP}
                  numOPPBTP={submittedData.numOPPBTP}
                  mailOPPBTP={submittedData.mailOPPBTP}
                  adressCRAMIF={submittedData.adressCRAMIF}
                  numCRAMIF={submittedData.numCRAMIF}
                  mailCRAMIF={submittedData.mailCRAMIF}
                  debuttravaux={submittedData.debuttravaux}
                  fintraveau={submittedData.fintraveau}
                  duree={submittedData.duree}
                  nomHopital={submittedData.nomHopital}
                  adresshopital={submittedData.adresshopital}
                  numerohopital={submittedData.numerohopital}
                  adressophtalmo={submittedData.adressophtalmo}
                  numeroophtalmo={submittedData.numeroophtalmo}
                  adressantipoison={submittedData.adressantipoison}
                  numeroantipoison={submittedData.numeroantipoison}
                  adressgeneraliste={submittedData.adressgeneraliste}
                  numerogeneraliste={submittedData.numerogeneraliste}
                />
              }
              fileName="ppsfs.pdf"
              className={styles.button_black}
            >
              {({ blob, url, loading, error }) =>
                loading ? "En telechargement" : "Télécharger "
              }
            </PDFDownloadLink>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
