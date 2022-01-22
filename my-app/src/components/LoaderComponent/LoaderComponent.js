import { Circles } from "react-loader-spinner";
import { FallBackContainer } from "../../style/FallBackContainer.styled";
export default function LoaderComponent() {
  return (
    <FallBackContainer>
      <Circles
        arialLabel="loading-indicator"
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </FallBackContainer>
  );
}
