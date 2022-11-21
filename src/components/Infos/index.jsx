import { useContext } from "react";
import { CalculateContext} from "../../contexts/calculate";
import "./index.css";

export const Infos = () => {
    const { value } = useContext(CalculateContext);
  
    return (
      <div className="reciveContainer">
        <div className="containerDiv">
          <h1>Você Receberá</h1>
          <p>
            Amanhã:
            {value[1] ? (
              <span> R$ {value[1].toFixed(2)}</span>
            ) : (
              <span> R$ 0,00</span>
            )}
          </p>
          <p>
            Em 15 dias:{" "}
            {value[15] ? (
              <span> R$ {value[15].toFixed(2)}</span>
            ) : (
              <span> R$ 0,00</span>
            )}
          </p>
          <p>
            Em 30 dias:{" "}
            {value[30] ? (
              <span> R$ {value[30].toFixed(2)}</span>
            ) : (
              <span> R$ 0,00</span>
            )}
          </p>
          <p>
            Em 90 dias:{" "}
            {value[90] ? (
              <span> R$ {value[90].toFixed(2)}</span>
            ) : (
              <span> R$ 0,00</span>
            )}
          </p>
        </div>
      </div>
    );
  };