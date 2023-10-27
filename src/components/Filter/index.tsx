import { Dispatch, SetStateAction } from "react";
import { Filter } from "../../assets/icons/filter";
import { Button } from "../Button";
import { FilterStyle } from "./styles";

type Props = {
  openOrClosed: boolean;
  button: Dispatch<SetStateAction<boolean>>;
  stateFilter: "TODOS" | "MÉDICOS" | "CONTRATANTES";
  setStateFilter: Dispatch<
    SetStateAction<"TODOS" | "MÉDICOS" | "CONTRATANTES">
  >;
  getFilter: () => void;
};

export function FilterButton({
  openOrClosed,
  button,
  stateFilter,
  setStateFilter,
  getFilter,
}: Props) {
  return (
    <FilterStyle>
      <button type="button" onClick={() => button(!openOrClosed)}>
        <Filter />
      </button>
      {openOrClosed && (
        <div className="filterOptions">
          <p className="filterBy">Filtrar por:</p>
          <div>
            <p className="status">Status</p>
            <div className="filterItem">
              <input
                checked={stateFilter === "TODOS"}
                onChange={() => setStateFilter("TODOS")}
                type="checkbox"
              />
              <p>Todos</p>
            </div>
            <div className="filterItem">
              <input
                checked={stateFilter === "MÉDICOS"}
                onChange={() => setStateFilter("MÉDICOS")}
                type="checkbox"
              />
              <p>Médicos</p>
            </div>
            <div className="filterItem">
              <input
                checked={stateFilter === "CONTRATANTES"}
                onChange={() => setStateFilter("CONTRATANTES")}
                type="checkbox"
              />
              <p>Contratantes</p>
            </div>
            <div className="buttonDiv">
              <Button
                variant="newplan"
                onClick={() => getFilter()}
                text="Aplicar"
              />
            </div>
          </div>
        </div>
      )}
    </FilterStyle>
  );
}
