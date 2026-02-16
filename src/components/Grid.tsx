import { useState } from "react";
import type { PokemonDetails } from "../type/PokemonDetails";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { AllCommunityModule, type ColDef } from "ag-grid-community";

function Grid({pokemons} : {pokemons : PokemonDetails[]}){
    const [row, setRow] = useState<PokemonDetails[]>(pokemons);
    const [col, setCol] = useState<ColDef<PokemonDetails>[]>([{field : "id"}, {field : "name"} ]);
    const modules = [AllCommunityModule];

    return (
        <AgGridProvider modules={modules}>
            <div style={{height: 500}} >
                <AgGridReact 
            rowData={row}
            columnDefs={col}
            />

            </div>
        </AgGridProvider>
    )
}

export default Grid