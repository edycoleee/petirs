import { useParams } from "react-router-dom";

export default function SertifikatDetail() {
  let params = useParams();
  return <h2>Sertifikat: {params.sertiId}</h2>;
}